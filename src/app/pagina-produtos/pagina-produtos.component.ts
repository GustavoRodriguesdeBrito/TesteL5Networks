import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagina-produtos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pagina-produtos.component.html',
  styleUrl: './pagina-produtos.component.css',
})
export class PaginaProdutosComponent implements OnInit {
  listaProdutos: Produto[] = [];

  constructor(private api: ApiService) {}
  ngOnInit() {
    console.log('prod-init triggered');
    this.api.getProdutos().subscribe((produtos: Produto[]) => {
      this.listaProdutos = produtos;
    });
  }
}
