import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perro } from '../model/perro';

@Injectable({
  providedIn: 'root'
})
export class PerroService {
  endopoint: string = 'http://localhost:3000/perros';


  constructor(public http: HttpClient) {
    console.log('PerroService constructor');
   }

   getAll(): Observable<any>{
    console.trace('PerroService getAll ${this.endopoint}');
    return this.http.get(this.endopoint);

  }

  delete(id: number): Observable<any>{
    let uri = this.endopoint +  "/" + id
    console.log(uri);
    console.trace(`FrutaService delete ${uri}`);
    return this.http.delete(uri);
  }

  getById(id: number):  Observable<any>{
  
    let url = this.endopoint + "/" + id;
    return this.http.get(url);
  }

  add(perro : Perro): Observable <any>{
    let body = {
    "nombre": perro.nombre,
    "raza": perro.raza,
    "edad":perro.edad,
    "img" : perro.img,
    "adopcion": perro.adopcion
  };
    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type': 'application/json'
      })

    };
    return this.http.post(this.endopoint, body , httpOptions);
  }
  update(perro : Perro): Observable <any>{
    let uri = this.endopoint + "/" + perro.id;
    let body = {
      "nombre": perro.nombre,
      "raza": perro.raza,
      "edad":perro.edad,
      "img" : perro.img,
      "adopcion": perro.adopcion
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(uri, body, httpOptions);
  }
}
