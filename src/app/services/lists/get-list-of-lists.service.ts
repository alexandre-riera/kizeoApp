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
    const url: string = environment.baseUrl + '/lists/' + listId;
    const token: string = environment.apiKey;
    
    let listDefinition: any = [];
    let listDefinitionArray: any = [];
    let listDefinitionSplittedArray: any = [];

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': token,
        'accept': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => (listDefinition.push(data.list.items)))
    .then(() =>{
      // Split elements in response by  [ : | and  ]
      listDefinition[0].map((element: string) => {
        listDefinitionArray.push(element.split(/[:|]/));
      })
      
      // Filter all double results in listDefinitionArray and push the result in listDefinitionSplittedArray
      let arrayLength = listDefinitionArray.length;

      for(let i = 0; i < arrayLength; i++) {
        let result = listDefinitionArray[i].filter(isUnique)
        listDefinitionSplittedArray.push(result)
      }
    })
    ;
    
    function isUnique(item: any, position: any, array: string | any[]) {
      return array.indexOf(item) === position;
    }

    return listDefinitionSplittedArray;
  }


}
