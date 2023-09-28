import { DbzService } from './../services/dbz.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input('data') nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> =
  //   new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService) {}
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.nuevo);

    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
