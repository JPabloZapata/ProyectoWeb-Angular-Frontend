import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common'; // ---╗
import localeES from '@angular/common/locales/es';    // ---║ esto es para convertir la fecha
registerLocaleData(localeES, 'es');                   // ---╝

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
//las siguientes importaciones son para link de pagina o importaciones
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
//por medio de este se establece la conexion con el backend
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosformComponent } from './productosform/productosform.component';

const routes: Routes = [
  {path: '', redirectTo: '/productos', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'clientes/form', component: FormComponent},
  {path: 'clientes/form/:id', component: FormComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/form', component: ProductosformComponent},
  {path: 'productos/form/:id', component: ProductosformComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    ProductosComponent,
    ProductosformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
