import { Component, OnInit } from '@angular/core';
import { Statistique } from 'src/app/models/statistique';
import { StatistiqueService } from 'src/app/services/statistique.service';

@Component({
  selector: 'app-page-principal',
  templateUrl: './page-principal.component.html',
  styleUrls: ['./page-principal.component.css']
})
export class PagePrincipalComponent implements OnInit {
  listStatistique!: Statistique[];
  
  constructor(public listStatistiques: StatistiqueService) {
    this.listStatistique = listStatistiques.getStats();
  }

  ngOnInit(): void {
  }

}
