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

export interface CategoriesResponseI {
  status: string;
  description: string;
  categories: string[];
}
