import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { MainComponent } from './main/main.component';
import { ColumnComponent } from './column/column.component';
import { SelectComponent } from './select/select.component';

import { DualListBoxModule } from 'ng2-dual-list-box';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDialogComponentComponent } from './modal-dialog-component/modal-dialog-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    MainComponent,
    ColumnComponent,
    SelectComponent,
    ModalDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DualListBoxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
