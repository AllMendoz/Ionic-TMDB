import { Movie } from '../../interface/busquedaInterface';
import { Serie } from '../../interface/busquedaInterface';
import { Persona } from '../../interface/busquedaInterface';
import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { APP_CONFIG, AppConfig } from './../config/config';

/*
  Generated class for the BusquedaInicialProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class busquedaInicialProvider {

  constructor(private http: Http, @Inject(APP_CONFIG) private config: AppConfig) {
 
  }

  private getURLParams():URLSearchParams{
    const params: URLSearchParams = new URLSearchParams();
    params.set('api_key', this.config.apiKey);
    return params;
  }

  //PELICULAS
  //-------------------------------------------------------
  getListPeliculas(selection: string, page = '0'){
    const params = this.getURLParams();
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    console.log(page);
    return this.http.get(this.config.apiUrl+`/movie/${selection}`, reqOptions)
      .map(response =>  response.json().results as Movie[]);
  }

  searchMovie(term: string, page = '0'): Observable<Movie[]>{
    const params = this.getURLParams();
    params.set("query", term);
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.config.apiUrl+"/search/movie", reqOptions)
      .map(response =>  response.json().results as Movie[]);
  }

  getMovieDetalles(id: string) : Observable<Movie>{

    const params = this.getURLParams();
    //this will append video information to the api response
    params.set('append_to_response','videos');
    const reqOptions: RequestOptionsArgs = {
      params: params
    }

    return this.http.get(this.config.apiUrl+`/movie/${id}`, reqOptions)
      .map(response =>  response.json() as Movie);
  }
  //-------------------------------------------------

   //SERIES
  //-------------------------------------------------------
  getListSeries(selection: string, page = '0'){
    const params = this.getURLParams();
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    console.log(page);
    return this.http.get(this.config.apiUrl+`/tv/${selection}`, reqOptions)
      .map(response =>  response.json().results as Serie[]);
  }

  searchSerie(term: string, page = '0'): Observable<Serie[]>{
    const params = this.getURLParams();
    params.set("query", term);
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    return this.http.get(this.config.apiUrl+"/search/tv", reqOptions)
      .map(response =>  response.json().results as Serie[]);
  }

  getSerieDetalles(id: string) : Observable<Serie>{

    const params = this.getURLParams();
    //this will append video information to the api response
    params.set('append_to_response','videos');
    const reqOptions: RequestOptionsArgs = {
      params: params
    }

    return this.http.get(this.config.apiUrl+`/tv/${id}`, reqOptions)
      .map(response =>  response.json() as Serie);
  }
  //-------------------------------------------------

   //PERSONAS
  //-------------------------------------------------------
  getListPersonas(selection: string, page = '0'){
    const params = this.getURLParams();
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    console.log(page);
    return this.http.get(this.config.apiUrl+`/person/${selection}`, reqOptions)
      .map(response =>  response.json().results as Persona[]);
  }

  searchPersonas(term: string, page = '0'): Observable<Persona[]>{
    const params = this.getURLParams();
    params.set("query", term);
    params.set("page", page);
    const reqOptions: RequestOptionsArgs = {
      params: params
    }
    console.log(params);
    return this.http.get(this.config.apiUrl+"/search/person", reqOptions)
      .map(response =>  response.json().results as Persona[]);
  }

  getPersonaDetalles(id: string) : Observable<Persona>{

    const params = this.getURLParams();
    //this will append video information to the api response
    params.set('append_to_response','videos');
    const reqOptions: RequestOptionsArgs = {
      params: params
    }

    return this.http.get(this.config.apiUrl+`/person/${id}`, reqOptions)
      .map(response =>  response.json() as Persona);
  }
  //-------------------------------------------------
}

