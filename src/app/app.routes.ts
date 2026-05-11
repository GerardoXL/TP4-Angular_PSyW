import { Routes } from '@angular/router';
import { Punto1 } from "./components/punto-1/punto-1";
import { Punto2 } from "./components/punto-2/punto-2";
import { Punto3 } from "./components/punto-3/punto-3";
import { Component } from '@angular/core';
import { ListadoComponent } from './components/listado/listado';

export const routes: Routes = [
    {path: 'punto1', component: Punto1},
    {path: 'punto2', component: Punto2},
    {path: 'punto3', component: Punto3},
    { path: 'listado', component: ListadoComponent }
];
