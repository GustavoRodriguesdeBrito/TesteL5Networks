import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDetalhesComponent } from './pagina-detalhes.component';

describe('PaginaDetalhesComponent', () => {
  let component: PaginaDetalhesComponent;
  let fixture: ComponentFixture<PaginaDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
