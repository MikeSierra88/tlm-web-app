import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from './components/components.shared.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { ReleasesModule } from './pages/releases/releases.module';
import { MerchStoreModule } from "./pages/merch-store/merch-store.module";
import { PressModule } from './pages/press/press.module';
import { AdminModule } from './pages/admin/admin.module';

import { AuthModule } from "@auth0/auth0-angular";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from "./store/auth.reducer";
import { AuthEffects } from "./store/auth.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot(environment.auth),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    SharedComponentsModule,
    MainPageModule,
    ReleasesModule,
    MerchStoreModule,
    PressModule,
    AdminModule,
    StoreModule.forRoot({auth: authReducer}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
