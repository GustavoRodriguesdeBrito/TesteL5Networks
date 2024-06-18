import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BuscaService {
  private termoBuscaSource: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  //o termo que será consultado
  termoAtual: Observable<string> = this.termoBuscaSource.asObservable();

  constructor() {}

  novaPesquisa(termo: string) {
    this.termoBuscaSource.next(termo);
  }
}
