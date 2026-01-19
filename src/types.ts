export interface TravelLocation {
  id: number;
  city: string;
  country: string;
  lat: number;
  lng: number;
  description?: string;
}

export type Project = {
  id: string;
  title: string;
  description: string;
  tasks: string[];
  achievements: string[];
  techStack: string[];
};
