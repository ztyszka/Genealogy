import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Person } from "../models/person.model";

const headerDict = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
})

const requestOptions = {
  headers: headerDict
};

@Injectable()

export class HttpService {
  private basePath: string = "";

  constructor(
    private httpClient: HttpClient,
    @Inject('BASE_URL') baseUrl: string) {
    httpClient.head;
    this.basePath = baseUrl;
  }

  public getAllPersons(): Observable<Person[]> {
    let path: string = `${this.basePath}persons`;
    return this.httpClient.get<Person[]>(path, requestOptions)
  }
}