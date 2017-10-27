import { busquedaInicialProvider } from './../../providers/busqueda-inicialProvider/busqueda-inicialProvider';
import { Persona } from './../../interface/busquedaInterface';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePersonasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-personas',
  templateUrl: 'detalle-personas.html',
})
export class DetallePersonasPage implements OnDestroy{
  
    persona:Persona;
    private personaSub: Subscription;
    constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private busquedaInicialProvider:busquedaInicialProvider
    ) {
    }
  
    ionViewDidLoad() {
      const id = this.navParams.get('id');
      this.personaSub = this.busquedaInicialProvider.getPersonaDetalles(id)
      .subscribe(persona => this.persona = persona);
    }
  
    public ngOnDestroy(): void {
        if(this.personaSub){
          this.personaSub.unsubscribe();
        }
    }
  }
