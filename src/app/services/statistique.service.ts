import { Injectable, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  listStatistiques: Statistique[] = [
    new Statistique('fa1f5f40-be3b-11eb-91ec-7f5875ecfb46', 'Démographie en France', '60M'),
    new Statistique('e3b-11eb-91ec-7', 'Démographie en Allemagne', '80M'),
    new Statistique('e1ec-7', 'Démographie en Biélorussie', '9M')
  ]

  constructor() {}

   getStats() {
    return this.listStatistiques;
   }
}
