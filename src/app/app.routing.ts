import { ListaproductosComponent } from "./components/listaproductos/listaproductos.component";
import { HomeComponent } from "./components/home/home.component";
import { DetalleproductoComponent } from "./components/detalleproducto/detalleproducto.component";
import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "productos", component: ListaproductosComponent}, 
    { path: "detalleproducto/:nombre/:imagen/:precio", component: DetalleproductoComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);
