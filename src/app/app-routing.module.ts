import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { RequieroVideosComponent } from './pages/requiero-videos/requiero-videos.component';
import { RequieroImagenesComponent } from './pages/requiero-imagenes/requiero-imagenes.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LlamadaEmergenciaComponent } from './pages/llamada-emergencia/llamada-emergencia.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { HomeComponent } from './pages/home/home.component';

// Guards
import { AngularFireAuthGuard, canActivate } from '@angular/fire/auth-guard';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';

// Rutas
const routes: Routes = [
  {
    path: 'bienvenida',
    component: BienvenidaComponent,
  },
  {
    path: 'home',
    component: HomeComponent, canActivate: [AuthGuard],
  },
  {
    path: 'llamada',
    component: LlamadaEmergenciaComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'verificar-email',
    component: VerificarEmailComponent,
  },
  {
    path: 'recuperar-password',
    component: RecuperarPasswordComponent,
  },
  {
    path: 'requiero-imagenes',
    component: RequieroImagenesComponent, canActivate: [AuthGuard],
  },
  {
    path: 'requiero-videos',
    component: RequieroVideosComponent,canActivate: [AuthGuard],
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
