import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import {environment} from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TotalContratsService {

  constructor(private http: HttpClient) { }


  /**
   * Function get count(*) contrats where agence equal Grenoble
  */
  public getContrats(){
    const url: string = 'https://www.kizeoforms.com/rest/v3/lists';
    // const token: string = environment.apiKey;
    const token: string = environment.apiKey;
    
    return this.http.get(url,{
      headers: new HttpHeaders({'Authorization': token,'content-type': 'application/json',})})
  }
}
