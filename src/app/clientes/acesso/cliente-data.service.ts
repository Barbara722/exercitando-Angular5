import { Injectable } from '@angular/core';
import { Cliente} from './cliente';
import {BehaviorSubject} from 'rxjs';

//BehaviorSubject
//pega o assunto no qual estamos trabalhando, a última informação. 
//recuperar o que estavva sendo digitado e jogar no banco de dados

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {
  private clienteSource = new BehaviorSubject({cliente: null as any, key: '' });
  currentCliente = this.clienteSource.asObservable();
  currentcliente: any = [];
  //sObserVABLE USADO COM O BehaviorSubject
  //CLIENTE VAI GUARDAR OS DADOS
 //método cliente fonte dos dados

  ///guardar os dados = a fonte dos dados

  constructor() { }

  atualizaCliente(cliente: Cliente, key:string){
    this.clienteSource.next({cliente: cliente, key: key});
    //enviar componente do formulário

  }
}
