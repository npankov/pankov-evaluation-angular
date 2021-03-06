import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiqueComponent } from './comoponents/statistique/statistique.component';
import { PageAddStatistiqueComponent } from './pages/page-add-statistique/page-add-statistique.component';
import { PagePrincipalComponent } from './pages/page-principal/page-principal.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiqueComponent,
    PageAddStatistiqueComponent,
    PagePrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
