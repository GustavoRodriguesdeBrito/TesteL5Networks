import { Routes } from '@angular/router';
import { PaginaCategoriasComponent } from './componentes/pagina-categorias/pagina-categorias.component';
import { PaginaProdutosComponent } from './componentes/pagina-produtos/pagina-produtos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'prefix', redirectTo: 'produtos' },
  { path: 'produtos', title: 'Produtos', component: PaginaProdutosComponent },
  {
    path: 'categorias',
    title: 'Categorias',
    component: PaginaCategoriasComponent,
  },
];
