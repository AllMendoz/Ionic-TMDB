import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BusquedaInicialPage } from '../busqueda-inicial/busqueda-inicial';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab4Root = BusquedaInicialPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
