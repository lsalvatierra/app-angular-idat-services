import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { CursoListaComponent } from './dashboard/cursos/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './dashboard/cursos/curso-detalle/curso-detalle.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthGuard } from './auth.guard';
import { EstadoListaComponent } from './dashboard/estados/estado-lista/estado-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { EstadoDetalleComponent } from './dashboard/estados/estado-detalle/estado-detalle.component';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent,
    HomeComponent,
    CursoListaComponent,
    CursoDetalleComponent,
    LoginComponent,
    EstadoListaComponent,
    EstadoDetalleComponent,
    

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {
        path: 'dashboard', component: DashboardComponent,
        canActivate: [AuthGuard],
        children : [
                {path: 'home', component: HomeComponent},
                {path: 'curso', component: CursoListaComponent},
                {path: 'curso/:id', component: CursoDetalleComponent},
                {path: 'estado', component: EstadoListaComponent},
                {path: 'estado/:id', component: EstadoDetalleComponent}
              ]
    },
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
