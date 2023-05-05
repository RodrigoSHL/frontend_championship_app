export interface Image {
  id: number;
  src: string;
}
export interface News {
  id: string;
  title: string;
  date: string;
  description: string;
  images: Image[];
}
