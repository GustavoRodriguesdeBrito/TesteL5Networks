import { HttpClient, HttpParams } from '@angular/common/http';
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
   * Retorna um Observable com array de produtos.
   * Pode ter um termo de busca por 'title' do produto.
   */
  public getProdutos(termo?: string, pagina?: number): Observable<Produto[]> {
    let url: string = `${this.baseUrl}/products`;

    let params: HttpParams = new HttpParams();

    if (termo) {
      params = params.set('title', termo);
    }
    if (pagina) {
      params = params.set('offset', pagina);
    }
    //para buscar 9 itens por vez
    params = params.set('limit', 9);

    return this.httpClient.get<Produto[]>(url, { params }).pipe(
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
