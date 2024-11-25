import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GenealogyComponent } from './components/genealogy/genealogy.component';
import { RouterModule } from '@angular/router';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GenealogyComponent, 
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: GenealogyComponent, pathMatch: 'full' },
    ]),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
