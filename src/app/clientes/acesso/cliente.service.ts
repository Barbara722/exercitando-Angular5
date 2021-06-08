import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import {AngularFireDatabase} from '@angular/fire/database';
@Injectable({

  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFireDatabase) { }

 insert(cliente: Cliente){
   this.db.list('cliente').push(cliente)
   .then((result: any ) =>{
     console.log(result.key);
     //métoodo pra inseriir cliente
   })
 }
 update (cliente: Cliente, key: string){
   this.db.list('cliente').update(key, cliente)
   .catch((erro: any) => {
     console.error(erro);
       //métoodo pra fazer alteração
   });
 }

}
