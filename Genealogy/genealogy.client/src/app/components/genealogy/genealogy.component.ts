import { Component } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-genealogy',
  templateUrl: './genealogy.component.html',
  styleUrls: ['./genealogy.component.css']
})
export class GenealogyComponent {
  public persons: Person[] = [];

  constructor(private httpService: HttpService){
    
  }

  async ngOnInit() {
    await this.httpService.getAllPersons().subscribe((src) => {
      this.persons = src;
    })}
  }