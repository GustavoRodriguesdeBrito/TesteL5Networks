import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../interfaces/produto';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pagina-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './pagina-detalhes.component.html',
  styleUrl: './pagina-detalhes.component.css',
})
export class PaginaDetalhesComponent {
  produto: Produto = {} as Produto;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getProduto(id).subscribe((produto) => {
      this.produto = produto;
      console.log(produto);
    });
  }

  public voltar() {
    this.location.back();
  }
}
