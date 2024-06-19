import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { ApiService } from '../../services/api.service';
import { BuscaComponent } from '../busca/busca.component';

@Component({
  selector: 'app-pagina-categorias',
  standalone: true,
  imports: [NgFor, BuscaComponent],
  templateUrl: './pagina-categorias.component.html',
  styleUrl: './pagina-categorias.component.css',
})
export class PaginaCategoriasComponent {
  listaCategorias: Categoria[] = [];
  termo: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getCategorias().subscribe((categorias) => {
      this.listaCategorias = categorias;
    });
  }
}
