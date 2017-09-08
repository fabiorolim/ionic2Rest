import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NotasPage } from "../pages/notas/notas";
import { WebserviceProvider } from "../providers/webservice/webservice";
import { HttpModule } from "@angular/http";
import { DetalhePage } from "../pages/detalhe/detalhe";

@NgModule({
  declarations: [
    MyApp,
    NotasPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetalhePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    NotasPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetalhePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WebserviceProvider
  ]
})
export class AppModule { }
