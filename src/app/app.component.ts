import { Statistique } from './models/statistique';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pankov-evaluation-angular';
  firstStatistique: Statistique = new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', 'Démographie en France', '60M');
  secondStatistique: Statistique = new Statistique('e3b-11eb-91ec-7', 'Démographie en Allemagne', '80M');

  constructor() {

  }

}
