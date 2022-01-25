import { Statistique } from './models/statistique';
import { StatistiqueService } from './services/statistique.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pankov-evaluation-angular';
  listStatistique!: Statistique[];

  constructor(public listStatistiques: StatistiqueService) {
    this.listStatistique = listStatistiques.getStats()
  }

}
