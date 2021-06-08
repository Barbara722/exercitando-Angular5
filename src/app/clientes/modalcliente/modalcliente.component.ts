import { Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.component.html',
  styleUrls: ['./modalcliente.component.css']
})
export class ModalclienteComponent {

  public DadosModal = {name:null,value:null} 

  constructor(
    public dialogRef: MatDialogRef<ModalclienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
      Object.assign(this.DadosModal,data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
