import { Categoria } from './categoria';

export interface Produto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Categoria;
  images: string[];
}
