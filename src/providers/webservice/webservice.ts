import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { NotaInterface } from "../../interfaces/notaInterface";

/*
  Generated class for the WebserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WebserviceProvider {

  private url: string = "http://devmedianotesapi.azurewebsites.net/";
  private headers = new Headers({ 'Accept': 'application/json' });

  constructor(public http: Http) {
    console.log('Hello WebserviceProvider Provider');
  }

  public addNota(nota: NotaInterface) {
    return this.http.post(this.url + 'api/notes/', nota, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }

  public getNotas() {
    console.log("getNotas");
    return this.http.get(this.url + 'api/notes')
      .toPromise()
      .then(res => res.json());
  }

  public deleteNota(nota: NotaInterface) {
    console.log(nota.Id);
    return this.http.delete(this.url + 'api/notes/' + nota.Id, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }

  public editNota(nota: NotaInterface) {
    console.log("EditNota " + nota.Id);
    return this.http.put(this.url + 'api/notes/' + nota.Id, nota, { headers: this.headers })
      .toPromise()
      .then(res => res.json());
  }
}
