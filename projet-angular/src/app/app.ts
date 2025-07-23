import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Entete } from "./entete/entete";
import { Footer } from './footer/footer';
import { ListeProduit } from "./liste-produit/liste-produit";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Entete, Footer, ListeProduit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected titrePrincipal = 'Mon titre préféré';
  protected sousTitre = 'Mon sous titre préféré';
  protected description = 'Ma description préféré';
}
