import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommandeListComponent } from './view/commande/commande-list/commande-list.component';
import { CommandeCreateComponent } from './view/commande/commande-create/commande-create.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './view/extra/footer/footer.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CommandeListComponent,
    CommandeCreateComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
