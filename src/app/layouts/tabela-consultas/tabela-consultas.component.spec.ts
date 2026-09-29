import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConsultasComponent } from './tabela-consultas.component';

describe('TabelaConsultasComponent', () => {
  let component: TabelaConsultasComponent;
  let fixture: ComponentFixture<TabelaConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaConsultasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
