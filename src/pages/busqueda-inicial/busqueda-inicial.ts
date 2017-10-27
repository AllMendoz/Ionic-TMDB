import { Movie } from '../../interface/busquedaInterface';
import { Serie } from '../../interface/busquedaInterface';
import { Persona } from '../../interface/busquedaInterface';
import { busquedaInicialProvider } from '../../providers/busqueda-inicialProvider/busqueda-inicialProvider';
import { DetallePeliculasPage } from '../detalle-peliculas/detalle-peliculas';
import { DetalleSeriesPage } from '../detalle-series/detalle-series';
import { DetallePersonasPage } from '../detalle-personas/detalle-personas';
import { Component, ViewChild, OnDestroy } from '@angular/core';
import { Content, NavController, NavParams } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { Subject, Subscription } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
/**
 * Generated class for the BusquedaInicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-busqueda-inicial',
  templateUrl: 'busqueda-inicial.html'
})
export class BusquedaInicialPage implements OnDestroy {

  BusquedaSearchPeliculas$: Subject<string> = new Subject<string>();
  BusquedaSearchseries$: Subject<string> = new Subject<string>();
  BusquedaSearchPersonas$: Subject<string> = new Subject<string>();
  BIniSelection = "popular";
  endPages: boolean = false;

  private lastSearchPelicula: string;
  private lastSearchSerie: string;
  private lastSearchPersona: string;

  movies: Movie[] = [];
  series: Serie[] = [];
  personas: Persona[] = [];


  private pagePelicula: number = 0;
  private pageSerie: number = 0;
  private pagePersona: number = 0;
  private subscription: Subscription;


  @ViewChild(Content) content: Content;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private busquedaInicialProvider: busquedaInicialProvider
  ) { }

//Metodo que lee la información en el campo de consulta o search
  searchBusqueda(search: string) {
    this.resetGeneral();     
    this.BusquedaSearchPeliculas$.next(search);
    this.BusquedaSearchseries$.next(search);
    this.BusquedaSearchPersonas$.next(search);
  }

  private resetGeneral() {
    this.pagePelicula = 0;
    this.pageSerie = 0;
    this.pagePersona = 0;
    this.movies = [];
    this.series = [];
    this.personas = [];
    this.endPages = false;
    this.content.scrollToTop(200);
  }

  ionViewDidLoad() {

    this.cargaPeliculas();
    this.cargaSeries();
    this.cargaPersonas();
  }

  //PELICULAS
  //---------------------------------------------------------------
  getBusquedaPelicula(selection: string) {
    this.resetPeliculas();
    this.BusquedaSearchPeliculas$.next(selection);
  }

  private resetPeliculas() {
    this.pagePelicula = 0;
    this.movies = [];
    this.endPages = false;
    this.content.scrollToTop(200);
  }

  cargaPeliculas() {
    this.subscription = this.BusquedaSearchPeliculas$
      .debounceTime(400)
      .switchMap((search: string) => {
        search = !!!search ? this.BIniSelection : search;

        const searchOpt: boolean =
          search === "now_playing" ||
            search === "popular" ||
            search === "top_rated" ||
            search === "upcoming" ||
            !!!search
            ? true
            : false;

        this.lastSearchPelicula = search;
        this.pagePelicula++;
        if (searchOpt) {
          return this.busquedaInicialProvider.getListPeliculas(search, this.pagePelicula.toString());
        } else {
          return this.busquedaInicialProvider.searchMovie(search, this.pagePelicula.toString());
        }
      })
      .subscribe((movies: Movie[]) => {
        this.movies = this.movies.concat(movies);
        console.log(this.movies);
        this.movies = this.movies.sort(function (a, b) {
          if ((a.release_date!=null)&&(b.release_date!=null)&&
          (a.release_date < b.release_date)){
            return 1;
          }
          if ((a.release_date!=null)&&(b.release_date!=null)&&
          (a.release_date > b.release_date)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        console.log('------------------------');
        console.log(this.movies);
        console.log(this.endPages);

        if (movies.length === 0) {
          this.endPages = true;
        }
      });

    setTimeout(() => this.BusquedaSearchPeliculas$.next(""), 1000);
  }

  goToDetallePeliculas(id: string) {
    this.navCtrl.push(DetallePeliculasPage, { id: id });
  }
  //-------------------------------------------------------------

  //SERIES
  //---------------------------------------------------------------
  getBusquedaSeries(selection: string) {
    this.resetSeries();
    this.BusquedaSearchseries$.next(selection);
  }

  private resetSeries() {
    this.pageSerie = 0;  
    this.series = [];
    this.endPages = false;
    this.content.scrollToTop(200);
  }

  cargaSeries() {
    this.subscription = this.BusquedaSearchseries$
      .debounceTime(400)
      .switchMap((search: string) => {
        search = !!!search ? this.BIniSelection : search;

        const searchOpt: boolean =
          search === "airing_today" ||
            search === "popular" ||
            search === "top_rated" ||
            search === "Latest" ||
            !!!search
            ? true
            : false;

        this.lastSearchSerie = search;
        this.pageSerie++;
        if (searchOpt) {
          return this.busquedaInicialProvider.getListSeries(search, this.pageSerie.toString());
        } else {
          return this.busquedaInicialProvider.searchSerie(search, this.pageSerie.toString());
        }
      })
      .subscribe((series: Serie[]) => {
        this.series = this.series.concat(series);
        console.log(this.series);
        this.series = this.series.sort(function (a, b) {
          if ((a.first_air_date!=null)&&(b.first_air_date!=null)&&
              (a.first_air_date < b.first_air_date)) {
            return 1;
          }
          if ((a.first_air_date!=null)&&(b.first_air_date!=null)&&
             (a.first_air_date > b.first_air_date)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        console.log('------------------------');
        console.log(this.series);
        console.log(this.endPages);

        if (series.length === 0) {
          this.endPages = true;
        }
      });

    setTimeout(() => this.BusquedaSearchseries$.next(""), 1000);
  }

  goToDetalleSeries(id: string) {
    this.navCtrl.push(DetalleSeriesPage, { id: id });
  }
  //-------------------------------------------------------------

  //PERSONAS
  //---------------------------------------------------------------

  getBusquedaPersona(selection: string) {
    this.resetPersonas();
    this.BusquedaSearchPersonas$.next(selection);
  }

  private resetPersonas() {
    this.pagePersona = 0;  
    this.personas = [];
    this.endPages = false;
    this.content.scrollToTop(200);
  }

  cargaPersonas() {
    this.subscription = this.BusquedaSearchPersonas$
      .debounceTime(400)
      .switchMap((search: string) => {
        search = !!!search ? this.BIniSelection : search;

        const searchOpt: boolean =
          search === "Latest" ||
            search === "popular"           
            !!!search
            ? true
            : false;

        this.lastSearchPersona = search;
        this.pagePersona++;
        if (searchOpt) {
          return this.busquedaInicialProvider.getListPersonas(search, this.pagePersona.toString());
        } else {
          return this.busquedaInicialProvider.searchPersonas(search, this.pagePersona.toString());
        }
      })
      .subscribe((personas: Persona[]) => {
        this.personas = this.personas.concat(personas);
        console.log(this.personas);
       this.personas = this.personas.sort(function (a, b) {
          if ((a.popularity!=null)&&(b.popularity!=null)&&
          (a.popularity < b.popularity)){
            return 1;
          }
          if ((a.popularity!=null)&&(b.popularity!=null)&&
          (a.popularity > b.popularity)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        console.log('------------------------');
        console.log(this.personas);
        console.log(this.endPages);

        if (personas.length === 0) {
          this.endPages = true;
        }
      });

    setTimeout(() => this.BusquedaSearchPersonas$.next(""), 1000);
  }

  goToDetallePersonas(id: string) {
    this.navCtrl.push(DetallePersonasPage, { id: id });
  }
  //-------------------------------------------------------------



  doInfinite(infiniteScroll) {
    this.BusquedaSearchPeliculas$.next(this.lastSearchPelicula);
    //infiniteScroll.enable(!this.endPages);
    setTimeout(() => {
      infiniteScroll.complete();
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
