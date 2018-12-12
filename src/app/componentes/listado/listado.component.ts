import { Component, OnInit } from '@angular/core';
import { Perro } from 'src/app/model/perro';
import { PerroService } from 'src/app/providers/perro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  perros: Perro[];

  constructor(public perroService: PerroService, public route: ActivatedRoute) {
    this.perros = [];
   }

  ngOnInit() {
    this.recargarLista();
  }

  recargarLista(){

    this.perroService.getAll().subscribe(data =>{
      this.perros = data.map( el => el);
      console.log(this.perros);
    });
    
  }

  eliminar (id:number){
    console.trace(`ListadoComponent `);
    this.perroService.delete(id).subscribe(data =>{
    console.debug('data %o', data);
    this.recargarLista();
    });
  }

}
