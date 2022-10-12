import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'financial-management-front';

  adicionar() {
    console.log(`Adicionando ${this.title}`);

    const numero = Math.round(Math.random() * 100);
    this.title = 'João ' + numero;
  }

  alterarNome(event: any) {
    // console.log(event);
    this.title = event.target.value;
  }
}
