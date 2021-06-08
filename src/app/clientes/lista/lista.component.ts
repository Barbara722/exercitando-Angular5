import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import{ModalclienteComponent} from '../modalcliente/modalcliente.component';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  displayedColumns: string[] = ['name','value','functions'];
  dataSource: any;  

  constructor(public dialog: MatDialog,
    private db: AngularFireDatabase) {
      this.dataSource=this.db.list("clientes")
      .snapshotChanges()
      //snapshotChanges=atualizar o que estamos jogando no banco

      .pipe(
        map(items => {
          return items.map(item => {
            return Object.assign({key: item.payload.key},item.payload.val())
        //payload mapear os dados e criar uma lista; chave key para firebase

          })
        })
      )     }

  ngOnInit(): void {
  }
  inserir(){
    
    const dialogRef = this.dialog.open(ModalclienteComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('clientes').push(result);
        //db acesos ao banco juntamnete com o Angular

           //push = poder cadastrar no banco

      }
    });
  }

  delete(key:any){
    this.db.list('clientes').remove(key);

  }

  edit(data:any){
    const dialogRef = this.dialog.open(ModalclienteComponent, {
        //editar dentro da própria lista

      width: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('clientes').update(data.key, result);
      }
    });
  }





}









