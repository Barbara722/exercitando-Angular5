import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatDialog } from '@angular/material/dialog';
import {map} from 'rxjs/operators';
import { ModalProdutosComponent } from '../modalprodutos/modalprodutos.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  displayedColumns: string[] = ['name','value',  'functions'];
  dataSource: any;  

  constructor(public dialog: MatDialog,
    private db: AngularFireDatabase) {
      this.dataSource=this.db.list("produtos")
      .snapshotChanges()
      //snapshotChanges=atualizar o que estamos jogando no banco com o firebase

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
    
    const dialogRef = this.dialog.open(ModalProdutosComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('produtos').push(result);
        //db acesos ao banco juntamnete com o Angular

           //push = poder cadastrar no banco

      }
    });
  }

  deletar(key:any){
    this.db.list('produtos').remove(key);

  }

  editar(data:any){
    const dialogRef = this.dialog.open(ModalProdutosComponent, {
        //editar dentro da própria lista

      width: '250px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.db.list('produtos').update(data.key, result);
      }
    });
  }


}
