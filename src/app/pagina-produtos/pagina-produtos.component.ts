import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Produto } from '../interfaces/produto';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina-produtos',
  standalone: true,
  imports: [NgFor, InfiniteScrollModule],
  templateUrl: './pagina-produtos.component.html',
  styleUrl: './pagina-produtos.component.css',
})
export class PaginaProdutosComponent implements OnInit {
  listaProdutos: Produto[] = [];
  pagina: number = 1;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getProdutos('', this.pagina).subscribe((produtos: Produto[]) => {
      console.log('length of results:', produtos.length);
      console.log('total:', this.listaProdutos.length);
      this.listaProdutos = produtos;
      console.log('total after:', this.listaProdutos.length);
    });
  }

  onScroll() {
    this.api.getProdutos('', this.pagina).subscribe((produtos: Produto[]) => {
      console.log('length of results:', produtos.length);
      console.log('total before:', this.listaProdutos.length);
      this.listaProdutos.push(...produtos);
      console.log('total after:', this.listaProdutos.length);
    });
  }
}
