import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancamentoPesquisaComponent } from './lancamento-pesquisa.component';

describe('LancamentoPesquisaComponent', () => {
  let component: LancamentoPesquisaComponent;
  let fixture: ComponentFixture<LancamentoPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancamentoPesquisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LancamentoPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
