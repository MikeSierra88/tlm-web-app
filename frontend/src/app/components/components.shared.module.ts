import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ContactsComponent} from './contacts/contacts.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SafeUrlPipe} from '../pipes/safe-url.pipe';
import {UnescapePipe} from '../pipes/unescape.pipe';
import {RouterModule} from '@angular/router';
import {BioComponent} from './bio/bio.component';
import {CallToActionComponent} from './call-to-action/call-to-action.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import {CountryCodeToNamePipe} from '../pipes/country-code-to-name.pipe';
import { ClickStopPropagationDirective } from "../directives/click-stop-propagation.directive";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BioComponent,
    CallToActionComponent,
    SafeUrlPipe,
    UnescapePipe,
    LoadingScreenComponent,
    CountryCodeToNamePipe,
    ClickStopPropagationDirective,
  ],
  imports: [CommonModule, NgbModule, FontAwesomeModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    BioComponent,
    CallToActionComponent,
    SafeUrlPipe,
    UnescapePipe,
    LoadingScreenComponent,
    CountryCodeToNamePipe,
    ClickStopPropagationDirective,
  ],
})
export class SharedComponentsModule {}
