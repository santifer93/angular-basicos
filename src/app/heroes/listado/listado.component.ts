import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'iroman', 'hulk', 'thor'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('borrando..');
    const heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }
}
