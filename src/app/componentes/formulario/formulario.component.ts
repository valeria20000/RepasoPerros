import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";
import { Perro } from 'src/app/model/perro';
import { PerroService } from 'src/app/providers/perro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  perro: Perro = new Perro();
  mensaje: string;

  constructor(private perroService: PerroService, private route: ActivatedRoute) { 
    this.perro.id = 0;
    this.resetForm();

  }
  resetForm(){
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      raza: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      edad: new FormControl('', [Validators.required, Validators.min(1), Validators.max(999)]),
      adopcion: new FormControl(false),
      img: new FormControl('https://picsum.photos/300/300/?random', [Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')])
     
    });
  }

  ngOnInit() {
      //recoger parameros aqui, No constructor
      this.route.params.subscribe(params => {
        this.perro.id = +params['id'];
        if (this.perro.id > 0) {
          this.detallePerro(this.perro.id);
  
        }
      });
  }

  detallePerro(id) {
    this.perroService.getById(id).subscribe(data => {
      this.perro = data;
      this.cargarFormulario(this.perro);

    });

  }

  cargarFormulario(perro: Perro) {
    console.trace('FormularioComponent cargarFormulario');
    this.formulario.controls.nombre.setValue(perro.nombre);
    this.formulario.controls.raza.setValue(perro.raza);
    this.formulario.controls.edad.setValue(perro.edad);
    this.formulario.controls.img.setValue(perro.img);
    this.formulario.controls.adopcion.setValue(perro.adopcion);
    

}
crear() {
  let perro = new Perro();
  perro.nombre = this.formulario.controls.nombre.value;
  perro.raza = this.formulario.controls.raza.value;
  perro.edad = this.formulario.controls.edad.value; 
  perro.img = this.formulario.controls.img.value; 
  perro.adopcion = this.formulario.controls.adopcion.value; 
  //Si la oferta esta activa aplicamos el descuento caso contrario no 
  
  this.perroService.add(perro).subscribe(data => {
    this.mensaje = "Creado correctamente fruta";
    this.resetForm();
  });

}
modificar() {
  let perro = new Perro();
  perro.nombre = this.formulario.controls.nombre.value;
  perro.raza = this.formulario.controls.raza.value;
  perro.edad = this.formulario.controls.edad.value; 
  perro.img = this.formulario.controls.img.value; 
  perro.adopcion = this.formulario.controls.adopcion.value; 
  //Si la oferta esta activa aplicamos el descuento caso contrario no 
 

  this.perroService.update(perro).subscribe(data => {
    console.debug('data %o', data);
    this.mensaje = "Modificado correctamente perro";
  });
}
sumitar() {
  if (this.perro.id > 0) {
    this.modificar();
  } else {
    this.crear();
  }

}



}
