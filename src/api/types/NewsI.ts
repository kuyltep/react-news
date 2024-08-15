export interface NewsI {
  id: string;
  title: string;
  url: string;
  author: string;
  image: string;
  language: string;
  category: string[];
  published: Date;
}

export interface ResponseI {
  status: string;
  news: NewsI[];
  page: number;
}
