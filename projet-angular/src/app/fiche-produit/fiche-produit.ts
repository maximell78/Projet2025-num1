import { Component } from '@angular/core';
import { Image } from "../image/image";
import { DetailProduit } from '../detail-produit/detail-produit';
import { PrixProduit } from "../prix-produit/prix-produit";
import { LienDetail } from "../lien-detail/lien-detail";

@Component({
  selector: 'app-fiche-produit',
  imports: [Image, DetailProduit, PrixProduit, LienDetail],
  templateUrl: './fiche-produit.html',
  styleUrl: './fiche-produit.css'
})
export class FicheProduit {

}
