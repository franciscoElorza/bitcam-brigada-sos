
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// Paginas
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LlamadaEmergenciaComponent } from './pages/llamada-emergencia/llamada-emergencia.component';
import { RequieroImagenesComponent } from './pages/requiero-imagenes/requiero-imagenes.component';
import { VerificarEmailComponent } from './pages/verificar-email/verificar-email.component';
import { RecuperarPasswordComponent } from './pages/recuperar-password/recuperar-password.component';
import { RequieroVideosComponent } from './pages/requiero-videos/requiero-videos.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Permitir peticiones
import { HttpClientModule} from '@angular/common/http';

// Enviroment
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';


// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Guard - para proteccion de rutas
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    LlamadaEmergenciaComponent,
    RequieroImagenesComponent,
    VerificarEmailComponent,
    RecuperarPasswordComponent,
    RequieroVideosComponent,
    HomeComponent,
    RegistroComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthGuardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
