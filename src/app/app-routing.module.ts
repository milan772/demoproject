import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { MainComponent } from './main/main.component';
import { ColumnComponent } from './column/column.component';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full', },
  // {path:'user',component:UserdasboardComponent},
  { path: '', component: MainComponent },
  { path: 'tab', component: TabComponent },
  { path: 'column', component: ColumnComponent },
  { path: 'select', component: SelectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
