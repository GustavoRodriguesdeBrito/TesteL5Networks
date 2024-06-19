import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';
import { Produto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string = 'https://api.escuelajs.co/api/v1';

  constructor(private httpClient: HttpClient) {}

  /**
   * Retorna um Observable com array de produtos.
   * Pode ter um termo de busca por 'title' do produto.
   */
  public getProdutos(pagina: number, termo?: string): Observable<Produto[]> {
    let url: string = `${this.baseUrl}/products`;
    let limite = 9;
    let params: HttpParams = new HttpParams();

    if (termo) {
      params = params.set('title', termo);
    }

    //para buscar 9 itens por vez
    params = params.set('offset', pagina * limite);
    params = params.set('limit', limite);

    return this.httpClient.get<Produto[]>(url, { params });
  }

  /**
   * Retorna um único produto com base no ID
   */
  public getProduto(id: number): Observable<Produto> {
    let url = `${this.baseUrl}/products/${id}`;

    return this.httpClient.get<Produto>(url);
  }

  /**
   * retorna um array de categorias
   */
  public getCategorias(): Observable<Categoria[]> {
    let url = `${this.baseUrl}/categories`;

    return this.httpClient.get<Categoria[]>(url);
  }
}
