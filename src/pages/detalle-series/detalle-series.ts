import { busquedaInicialProvider } from './../../providers/busqueda-inicialProvider/busqueda-inicialProvider';
import { Serie } from './../../interface/busquedaInterface';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalleSeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-series',
  templateUrl: 'detalle-series.html',
})
export class DetalleSeriesPage implements OnDestroy{
  
    serie:Serie;
    private SerieSub: Subscription;
    constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private busquedaInicialProvider:busquedaInicialProvider
    ) {
    }
  
    ionViewDidLoad() {
      const id = this.navParams.get('id');
      this.SerieSub = this.busquedaInicialProvider.getSerieDetalles(id)
      .subscribe(serie => this.serie = serie);
    }
  
    public ngOnDestroy(): void {
        if(this.SerieSub){
          this.SerieSub.unsubscribe();
        }
    }
  }

