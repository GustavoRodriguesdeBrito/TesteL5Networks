import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../../interfaces/categoria';
import { ApiService } from '../../services/api.service';
import { BuscaService } from '../../services/busca.service';
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

  constructor(private api: ApiService, private buscaSvc: BuscaService) {}

  ngOnInit(): void {
    this.buscaSvc.termoAtual.subscribe((termo) => {
      this.termo = termo;

      this.listaCategorias = [];

      this.api.getCategorias().subscribe((categorias) => {
        this.listaCategorias = categorias.filter((cat) => {
          //filtrar pelo nome (case-insensitive) da categoria
          return cat.name.toLocaleLowerCase().includes(this.termo);
        });
      });
    });
  }
}
