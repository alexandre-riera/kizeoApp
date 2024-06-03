import { Component, OnInit } from '@angular/core';
import {AgenceTitleComponent} from './components/agenceTitle/agence.title.component';
import {SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import {CounterComponent} from './components/counter/counter.component';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { ListsService } from './services/lists/get-list-of-lists.service';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'kiz-root',
  standalone: true,
  imports: [
    AgenceTitleComponent,
    SidebarMenuComponent,
    CounterComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private _listsService: ListsService, private _listeDefinition: ListsService){}

  public lists: any = [];
  public listClient38: any = [];
  public listeEquipements38: any = [];
  public listeEquipementsMontpellier: any = [];
  public flotteAuto: any = [];
  title = 'KizeoAppFront';

  ngOnInit(){
    this.lists = this._listsService.getLists();
    this.listClient38 = this._listeDefinition.getListDefinitionById(environment.idListeClient38);
    this.listeEquipements38 = this._listeDefinition.getListDefinitionById(environment.idListeEquipements38);
    this.listeEquipementsMontpellier = this._listeDefinition.getListDefinitionById(environment.idListeEquipementsMontpellier);
    this.flotteAuto = this._listeDefinition.getListDefinitionById(environment.idFlotteAuto);
    console.log(this.flotteAuto)
  }
}
