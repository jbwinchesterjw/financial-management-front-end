import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {FuncionarioCardComponent} from './funcionario/funcionario-card/funcionario-card.component';
import {FuncionarioFormComponent} from './funcionario/funcionario-form/funcionario-form.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import { LancamentoPesquisaComponent } from './lancamento/lancamento-pesquisa/lancamento-pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    LancamentoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    TabViewModule,
    AppRoutingModule,
    FormsModule,
    TabViewModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
