export interface Announcement {
  ID: string;
  Text: string;
  Status: string;
  Priority: string;
  Affected_Service_Ids: string;
  Created_On: string;
  Created_By: string;
}

export interface AnnouncementsResponse {
  AnnouncementsResult: {
    TimeStamp: string;
    Announcement: Array<Announcement>;
  };
}
