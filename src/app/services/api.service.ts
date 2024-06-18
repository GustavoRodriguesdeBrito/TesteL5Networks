import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://api.escuelajs.co/api/v1';

  constructor(private httpClient: HttpClient) {}

  /**
   * Retorna um Observable com array de produtos
   */
  public getProdutos(): Observable<Produto[]> {
    let url: string = `${this.baseUrl}/products`;
    return this.httpClient.get<Produto[]>(url).pipe(
      map((produtos) => {
        return produtos.map((produto) => {
          return {
            id: produto.id,
            title: produto.title,
            price: produto.price,
            description: produto.description,
            category: produto.category,
            images: produto.images,
          };
        });
      })
    );
  }

  /**
   * retorna um array de categorias
   */
  public getCategorias() {}
}
