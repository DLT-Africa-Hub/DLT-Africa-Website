const ALLOWED_HOSTS = new Set(["video.twimg.com"]);

const TWITTER_FETCH_HEADERS = {
  Referer: "https://x.com/",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  Accept: "video/mp4,video/*;q=0.9,*/*;q=0.8",
};

function parseAllowedPosterVideoUrl(rawUrl) {
  if (!rawUrl || typeof rawUrl !== "string") {
    throw new Error("url query parameter is required");
  }

  let parsed;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    throw new Error("Invalid url");
  }

  if (parsed.protocol !== "https:" || !ALLOWED_HOSTS.has(parsed.hostname)) {
    throw new Error("Only https://video.twimg.com URLs are allowed");
  }

  if (!/\.mp4(\?|$)/i.test(parsed.pathname + parsed.search)) {
    throw new Error("URL must point to an mp4 file");
  }

  return parsed.toString();
}

async function fetchTwitterPosterVideo(url) {
  const response = await fetch(url, {
    headers: TWITTER_FETCH_HEADERS,
    redirect: "follow",
  });

  if (!response.ok) {
    const err = new Error(`Twitter CDN returned ${response.status}`);
    err.statusCode = response.status;
    throw err;
  }

  return response;
}

module.exports = {
  parseAllowedPosterVideoUrl,
  fetchTwitterPosterVideo,
};
