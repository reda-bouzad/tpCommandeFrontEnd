import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commande} from "../model/commande.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private _commande: Commande;
  private _commandes: Array<Commande>;
  private _url = "http://localhost:8036/api/v1/commande/";

  constructor(private _http:HttpClient) { }

  public findAll():Observable<Array<Commande>>{
    return this._http.get<Array<Commande>>(this.url);
  }
  public save(commande: Commande):Observable<Commande>{
    return this._http.post<Commande>(this.url , commande);
  }
  public  deleteByReference(ref: string): Observable<number>{
    return this._http.delete<number>(this.url+'reference/'+ref);
  }

  get commande(): Commande {
    if (this._commande == null){
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null){
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

}
