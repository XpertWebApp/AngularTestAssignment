import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  baseURL = "https://gorest.co.in/public/v1/users";
  constructor(private http: HttpClient) { }

  loadData() {
    return this.http.get(this.baseURL);
  }
  loadDataPaging(page:any) {
    return this.http.get(this.baseURL+"?page="+page +"&limit="+100);
  }
}
