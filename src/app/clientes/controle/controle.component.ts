import { Component, OnInit } from '@angular/core';
import { Cliente } from '../acesso/cliente';
import {ClienteDataService} from '../acesso/cliente-data.service';
import { ClienteService } from '../acesso/cliente.service';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.css']
})
export class ControleComponent implements OnInit {
cliente: any = Cliente

key: string = '';

  constructor(private clienteService: ClienteService, private clienteDataService: ClienteDataService ) {
}

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.clienteDataService.currentCliente.subscribe(data =>{
      if(data.cliente && data.key){
        this.cliente = new Cliente();
        this.cliente.nome = data.cliente.nome;
        this.cliente.telefone = data.cliente.telefone;
        this.cliente.marca = data.cliente.marca;
        this.key = data.key;
        //criar um cliente a partir dos dados que virão do formulário
        //associar dentro do banco que está vindo do formulário

      
      
         //associar os dados a classe

      }
      
    }) 
  }

  onSubmit(){
    if (this.key){
      this.clienteService.update(this.cliente, this.key);
      //chave do cliente no banco
    }
    else{
      this.clienteService.insert(this.cliente);
  //se o cliente não for gravado vai inseriri os dsados do cliente no banco
  //se a chave existe faz um update senão um insert pra gravar ela    
}

    this.cliente = new this.cliente();
      }

  

    }
  
