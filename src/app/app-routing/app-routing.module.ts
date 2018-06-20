import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeIncidentComponent} from '../liste-incident/liste-incident.component';
import {IncidentDetailComponent} from '../incident-detail/incident-detail.component';


const routes: Routes = [
  {path: '', redirectTo: 'incidents', pathMatch: 'full'},
  {path: 'incidents', component: ListeIncidentComponent},
  {path: 'incident/:id', component: IncidentDetailComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})



export class AppRoutingModule { }
