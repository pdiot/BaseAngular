import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PandaComponent } from './panda/panda.component';
import { PandaListComponent } from './panda-list/panda-list.component';
import { PandaGestionComponent } from './panda-gestion/panda-gestion.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PandaFormComponent } from './panda-form/panda-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PandaComponent,
    PandaListComponent,
    PandaGestionComponent,
    PandaFormComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
