import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { NotaInterface } from "../../interfaces/notaInterface";
import { WebserviceProvider } from "../../providers/webservice/webservice";
import { DetalhePage } from "../detalhe/detalhe";

/**
 * Generated class for the NotasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})

export class NotasPage {

  public abreForm: boolean = false;
  public tituloPagina: string = "Notas";
  public nota: NotaInterface = { Title: '', Body: '' };
  public notas: Array<NotaInterface>;
  public novaNota: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public webservice: WebserviceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  ionViewDidEnter() {
    this.webservice.getNotas().then(data => this.notas = data);
    console.log("ionViewDidEnter");
    console.log(this.notas);
  }

  abrirDetalhe(nota: NotaInterface) {
    this.navCtrl.push(DetalhePage, { 'nota': nota });
  }

  abreFormulario() {
    console.log("abreFormulario");
    this.abreForm = !this.abreForm;
    this.nota = {Title: '', Body: ''};
    if (this.abreForm == true) {
      this.tituloPagina = "Nova nota";
    } else {
      this.tituloPagina = "Notas";
    }
  }

  salvar() {
    if (this.novaNota) {
      console.log("Salvar");
      console.log(this.nota);
      let nota = this.nota;
      this.nota = { Title: '', Body: '' };
      this.abreForm = false;
      this.webservice.addNota(nota).then(data => this.notas.push(data));
    } else {
      console.log("Salvar editar");
      this.abreForm = false;
      this.webservice.editNota(this.nota).then(data => console.log(this.nota));
    }

  }

  removeNota(data: NotaInterface) {
    console.log("RemoveNota");
    for (let k in this.notas) {
      if (this.notas[k].Id == data.Id) {
        this.notas.splice(parseInt(k), 1);
        console.log(this.notas);
      }
    }
  }

  delete(nota: NotaInterface, opcoes: ItemSliding) {
    console.log("Delete");
    opcoes.close();
    this.webservice.deleteNota(nota).then(data => this.removeNota(nota));
  }

  // atualizaNotas(nota: NotaInterface) {
  //   console.log(nota.Id + " - AtualizaNotas");
  //   for (let k in this.notas) {
  //     if (this.notas[k].Id == nota.Id) {
  //       this.notas[k] = nota;
  //     }
  //   }
  // }

  abreEditNota(nota: NotaInterface, opcoes: ItemSliding) {
    console.log("abreEditNotas");
    opcoes.close();
    this.abreForm = true;
    this.novaNota = false;
    this.tituloPagina = "Alterar nota";
    this.nota = nota;
  }
}