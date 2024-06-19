import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css',
})
export class BuscaComponent {
  termoBusca: string = '';

  constructor(private buscaSvc: BuscaService) {}

  ngOnInit(): void {
    /* receba o termo de busca para ser exibido
     * na caixa de pesquisa após a mudança de página
     */
    this.buscaSvc.termoAtual.subscribe((termo) => {
      this.termoBusca = termo;
    });
  }

  buscar() {
    this.buscaSvc.novaPesquisa(this.termoBusca);
  }
}
