import { Routes } from '@angular/router';
import { PaginaCategoriasComponent } from './componentes/pagina-categorias/pagina-categorias.component';
import { PaginaDetalhesComponent } from './componentes/pagina-detalhes/pagina-detalhes.component';
import { PaginaProdutosComponent } from './componentes/pagina-produtos/pagina-produtos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'produtos' },
  { path: 'produtos', title: 'Produtos', component: PaginaProdutosComponent },
  {
    path: 'categorias',
    title: 'Categorias',
    component: PaginaCategoriasComponent,
  },
  {
    path: 'produtos/:id',
    pathMatch: 'full',
    title: 'Detalhes do produto',
    component: PaginaDetalhesComponent,
  },
];
