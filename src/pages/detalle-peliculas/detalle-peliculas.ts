import { busquedaInicialProvider } from './../../providers/busqueda-inicialProvider/busqueda-inicialProvider';
import { Movie } from './../../interface/busquedaInterface';
import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy } from '@angular/core';
import { IonicPage,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePeliculasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-peliculas',
  templateUrl: 'detalle-peliculas.html',
})
export class DetallePeliculasPage implements OnDestroy{
  
    movie:Movie;
    private movieSub: Subscription;
    constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private busquedaInicialProvider:busquedaInicialProvider
    ) {
    }
  
    ionViewDidLoad() {
      const id = this.navParams.get('id');
      this.movieSub = this.busquedaInicialProvider.getMovieDetalles(id)
      .subscribe(movie => this.movie = movie);
    }
  
    public ngOnDestroy(): void {
        if(this.movieSub){
          this.movieSub.unsubscribe();
        }
    }
  }
