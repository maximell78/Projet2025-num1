import { Component } from '@angular/core';
import { FicheProduit } from '../fiche-produit/fiche-produit';

@Component({
  selector: 'app-liste-produit',
  imports: [FicheProduit],
  templateUrl: './liste-produit.html',
  styleUrl: './liste-produit.css'
})
export class ListeProduit {

}
