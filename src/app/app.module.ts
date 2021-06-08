import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import { ControleComponent } from './clientes/controle/controle.component';
import { ListaComponent } from './clientes/lista/lista.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ModalclienteComponent } from './clientes/modalcliente/modalcliente.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProdutosComponent } from './clientes/produtos/produtos.component';
import { ModalProdutosComponent } from './clientes/modalprodutos/modalprodutos.component';


@NgModule({
  declarations: [
    AppComponent,
    ControleComponent,
    ListaComponent,
    ModalclienteComponent,
    ProdutosComponent,
    ModalProdutosComponent  
  ],
  entryComponents:[
    ModalclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
 
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
