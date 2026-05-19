#!/usr/bin/env bash
# Seed all events from frontend/app/events.json
# Usage: ./scripts/seed-events.sh [base_url]
# Example: ./scripts/seed-events.sh http://localhost:8000/api/v1

set -euo pipefail

BASE_URL="${1:-http://localhost:8000/api/v1}"
EVENTS_JSON="$(cd "$(dirname "$0")/../.." && pwd)/frontend/app/events.json"

if ! command -v jq >/dev/null 2>&1; then
  echo "Error: jq is required. Install with: brew install jq"
  exit 1
fi

if [[ ! -f "$EVENTS_JSON" ]]; then
  echo "Error: events.json not found at $EVENTS_JSON"
  exit 1
fi

api_body() {
  jq -c '{
    company: .company,
    eventName: .eventName,
    eventCategory: .eventCategory,
    eventType: (.eventType | gsub("^\\s+|\\s+$"; "")),
    startDate: .startDate,
    duration: .duration,
    eventVenue: .eventVenue,
    eventRegLink: (.eventRegLink // ""),
    media: (.media // ""),
    eventDescription: .eventDescription
  }' <<<"$1"
}

echo "Using API: $BASE_URL"
echo "From: $EVENTS_JSON"
echo ""

# PATCH existing
echo "=== PATCH (existing) ==="
jq -c '.[] | select(.mongoId != null)' "$EVENTS_JSON" | while read -r event; do
  id=$(echo "$event" | jq -r '.mongoId')
  name=$(echo "$event" | jq -r '.eventName')
  body=$(api_body "$event")
  code=$(curl -s -o /tmp/seed-res.json -w "%{http_code}" -X PATCH \
    -H "Content-Type: application/json" \
    -d "$body" \
    "$BASE_URL/events/update/$id")
  if [[ "$code" == "200" ]]; then
    echo "OK  PATCH $name"
  else
    echo "FAIL PATCH $name (HTTP $code)"
    cat /tmp/seed-res.json
    echo ""
  fi
done

# POST new
echo ""
echo "=== POST (create) ==="
jq -c '.[] | select(.mongoId == null)' "$EVENTS_JSON" | while read -r event; do
  name=$(echo "$event" | jq -r '.eventName')
  body=$(api_body "$event")
  code=$(curl -s -o /tmp/seed-res.json -w "%{http_code}" -X POST \
    -H "Content-Type: application/json" \
    -d "$body" \
    "$BASE_URL/events/create-event")
  if [[ "$code" == "201" ]]; then
    echo "OK  POST $name"
  else
    echo "FAIL POST $name (HTTP $code)"
    cat /tmp/seed-res.json
    echo ""
  fi
done

echo ""
count=$(curl -s "$BASE_URL/events/get-all-events?limit=200" | jq -r '.totalEvents // .count')
echo "Done. Total events in API: $count"
