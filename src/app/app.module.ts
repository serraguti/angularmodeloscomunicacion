import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {routing, appRoutingProviders} from './app.routing';
import { DetalleproductoComponent } from './components/detalleproducto/detalleproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaproductosComponent,
    HomeComponent,
    MenuComponent,
    DetalleproductoComponent
  ],
  imports: [
    BrowserModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
