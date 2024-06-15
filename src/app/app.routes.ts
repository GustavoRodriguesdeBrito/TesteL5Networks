import { Routes } from '@angular/router';
import { PaginaCategoriasComponent } from './pagina-categorias/pagina-categorias.component';
import { PaginaProdutosComponent } from './pagina-produtos/pagina-produtos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'produtos' },
  { path: 'produtos', title: 'Produtos', component: PaginaProdutosComponent },
  {
    path: 'categorias',
    title: 'Categorias',
    component: PaginaCategoriasComponent,
  },
];
