import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }


  /**
   * Function get count(*) contrats where agence equal Grenoble
  */
  public getLists(){
    const url: string = environment.baseUrl + '/lists';
    const token: string = environment.apiKey;
    
    let result: any = [];
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token
      }
    })
    .then((response) => response.json())
    .then((data) => (result.push(data.lists)));
 
    return result;
  }
}
