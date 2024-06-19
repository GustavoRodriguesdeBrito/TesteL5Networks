import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscaService {
  private termoBuscaSource: BehaviorSubject<string>;
  public termoAtual: Observable<string>;

  constructor() {
    //verifique se existe um termo de busca já salvo, se tiver utilize-o
    const termoSalvo = localStorage.getItem('termoBusca') || '';
    this.termoBuscaSource = new BehaviorSubject<string>(termoSalvo);
    //o termo que será usado na consulta da API
    this.termoAtual = this.termoBuscaSource.asObservable();
  }

  novaPesquisa(termo: string) {
    this.termoBuscaSource.next(termo);
    localStorage.setItem('termoBusca', termo);
  }
}
