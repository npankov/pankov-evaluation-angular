import { PagePrincipalComponent } from './pages/page-principal/page-principal.component';
import { PageAddStatistiqueComponent } from './pages/page-add-statistique/page-add-statistique.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'pageprincipal', component: PagePrincipalComponent },
  { path: 'addstat', component: PageAddStatistiqueComponent },
  { path: '**', redirectTo: 'pageprincipal' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
