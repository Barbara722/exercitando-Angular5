import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modalProdutos',
  templateUrl: './modalProdutos.component.html',
  styleUrls: ['./modalProdutos.component.css']
})
export class ModalProdutosComponent {

  public DadosModal = {name:null,value:null} 

  constructor(
    public dialogRef: MatDialogRef<ModalProdutosComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      Object.assign(this.DadosModal,data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
