import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `<h1>
      {{ title }}
    </h1>

    <h3>
      la base es: <strong> {{ base }} </strong>
    </h3>

    <span> {{ numero }} </span>
    <br />
    <button (click)="acumular(base)">+ {{ base }}</button>
    <button (click)="acumular(-base)">- {{ base }}</button>`,

  
})
export class ContadorComponent {
  title: string = 'contadorApp';
  numero: number = 10;
  base: number = 5;

  // aumentarNumero(){
  //   this.numero = this.numero+1
  // }
  // restarNumero(){
  //   this.numero = this.numero-1
  // }

  acumular(valor: number) {
    this.numero += valor;
  }
}
