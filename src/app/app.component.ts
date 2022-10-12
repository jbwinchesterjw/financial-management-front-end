import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financial-management-front';
  adicionado = false;

  adicionar() {
    console.log(`Adicionando ${this.title}`);
    this.adicionado = true;
  }

}
