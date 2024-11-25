import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RouteConsts } from './route-consts';
import { GenealogyComponent } from './components/genealogy/genealogy.component';

const routes: Routes = [
  { path: RouteConsts.genealogy, component: GenealogyComponent }
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
