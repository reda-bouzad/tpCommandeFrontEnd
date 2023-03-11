import {Component, OnInit} from '@angular/core';
import {Commande} from "../../../controller/model/commande.model";
import {CommandeService} from "../../../controller/service/commande.service";

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit{
  ngOnInit(): void {
  }

  public save(): void{
    this.commandeService.save(this.commande).subscribe(
      data => {
        if (data == null) {
          alert('failure : ref exist')
        }else{
          //this.commande = null;
          alert('success : commande sav')
        }
      }
    );
  }

  constructor(private commandeService:CommandeService) {
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

}
