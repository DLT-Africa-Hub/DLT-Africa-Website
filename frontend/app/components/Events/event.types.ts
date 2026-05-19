export interface EventRecord {
  _id: string;
  company?: string;
  eventName: string;
  eventCategory: string;
  eventType: string;
  startDate: string;
  duration: string;
  eventRegLink?: string;
  eventVenue: string;
  media?: string;
  eventDescription: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventsListResponse {
  success: boolean;
  count: number;
  totalEvents: number;
  currentPage: number;
  totalPages: number;
  data: EventRecord[];
}
