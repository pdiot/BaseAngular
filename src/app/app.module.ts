import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { IncidentComponent } from './incident/incident.component';
import { ListeIncidentComponent } from './liste-incident/liste-incident.component';
import {HttpClientModule} from '@angular/common/http';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IncidentDetailComponent } from './incident-detail/incident-detail.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { IncidentClosComponent } from './incident-clos/incident-clos.component';

@NgModule({
  declarations: [
    AppComponent,
    IncidentComponent,
    ListeIncidentComponent,
    IncidentFormComponent,
    IncidentDetailComponent,
    IncidentClosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
