import { Injectable, inject } from '@angular/core';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  /**
   * Function getLists(*) to get list of lists
  */
  public getLists(){
    const url: string = environment.baseUrl + '/lists';
    const token: string = environment.apiKey;
    
    let result: any = [];
    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => (result.push(data.lists)));
 
    return result;
  }
  /**
   * Function getListDefinitionById(*) to get list of lists
  */
  public getListDefinitionById(id: number){
    let listId = id;
    let listOfLists = this.getLists();
    const url: string = environment.baseUrl + '/lists/' + listId + '/complete';
    const token: string = environment.apiKey;
    
    let listDefinition: any = [];

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => (listDefinition.push(data.list)));

    return listDefinition;
  }


}
