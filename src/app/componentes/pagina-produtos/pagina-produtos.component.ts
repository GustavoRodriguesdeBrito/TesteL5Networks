import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Produto } from '../../interfaces/produto';
import { ApiService } from '../../services/api.service';
import { BuscaService } from '../../services/busca.service';
import { BuscaComponent } from '../busca/busca.component';

@Component({
  selector: 'app-pagina-produtos',
  standalone: true,
  imports: [NgFor, InfiniteScrollModule, BuscaComponent],
  templateUrl: './pagina-produtos.component.html',
  styleUrl: './pagina-produtos.component.css',
})
export class PaginaProdutosComponent implements OnInit {
  listaProdutos: Produto[] = [];
  pagina: number = 0;
  termo: string = '';

  constructor(private api: ApiService, private buscaSvc: BuscaService) {}
  ngOnInit(): void {
    this.buscaSvc.termoAtual.subscribe((termo) => {
      this.termo = termo;

      //limpe os resultados não relevantes à pesquisa
      this.listaProdutos = [];
      this.pagina = 0;

      this.api
        .getProdutos(this.pagina, this.termo)
        .subscribe((produtos: Produto[]) => {
          this.listaProdutos = produtos;
          this.pagina += 1;
        });
    });
  }

  onScroll() {
    this.api
      .getProdutos(this.pagina, this.termo)
      .subscribe((produtos: Produto[]) => {
        this.listaProdutos.push(...produtos);
        this.pagina += 1;
      });
  }
}
