import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../controller/service/commande.service";
import {Commande} from "../../../controller/model/commande.model";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit{
  ngOnInit(): void {
    this.findAll();
  }

  constructor(private commandeService:CommandeService) {
  }


  public findAll():void{
    this.commandeService.findAll().subscribe(
      data => this.commandes = data
    );
  }



  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }
  public delete(c: Commande) {
    this.commandeService.deleteByReference(c.reference).subscribe(
      data => {
        let index = this.commandes.findIndex(e => c.reference == e.reference);
        this.commandes.splice(index, 1);
      }
    );
  }

}
