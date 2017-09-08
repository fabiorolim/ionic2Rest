import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotaInterface } from "../../interfaces/notaInterface";

/**
 * Generated class for the DetalhePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  nota: NotaInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nota = this.navParams.get('nota');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }
}
