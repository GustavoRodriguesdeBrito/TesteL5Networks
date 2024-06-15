import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'Dashboard';

  constructor(router: Router, foo: ActivatedRoute) {
    router.events.subscribe((event) => {
      //se a página carregou com sucesso, exiba o título da página
      if (event instanceof NavigationEnd) {
        this.title = router.routerState.snapshot.root.firstChild?.title || '';
      }
      if (event instanceof NavigationError) {
        //this.title = 'problem';
      }
    });
  }
}
