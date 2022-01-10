export interface Banner {
  begin: string;
  description: string;
  enabled: boolean;
  end: string;
  id: number;
  img_url: string;
  link_url: string;
  name: string;
  priority: number;
  type: string;
}

export interface PublicityResponse {
  banners: Array<Banner>;
  frequency: number;
}
