import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BusquedaInicialPageModule } from './../pages/busqueda-inicial/busqueda-inicial.module';
import { DetallePeliculasPage } from '../pages/detalle-peliculas/detalle-peliculas';
import { DetallePersonasPage } from '../pages/detalle-personas/detalle-personas';
import { DetalleSeriesPage } from '../pages/detalle-series/detalle-series';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage, 
    TabsPage,
    DetallePeliculasPage,
    DetallePersonasPage,
    DetalleSeriesPage

  ],
  imports: [
    BrowserModule,
    BusquedaInicialPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    TabsPage,
    DetallePeliculasPage,
    DetallePersonasPage,
    DetalleSeriesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },


  ]
})
export class AppModule { }
