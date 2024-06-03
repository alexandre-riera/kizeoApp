import { Component, OnInit } from '@angular/core';
import {AgenceTitleComponent} from './components/agenceTitle/agence.title.component';
import {SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import {CounterComponent} from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { ListsService } from './services/lists/get-list-of-lists.service';

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
  constructor(private _listsService: ListsService){}

  public lists: any = [];

  title = 'KizeoAppFront';

  ngOnInit(){
    this.lists = this._listsService.getLists();
  }
}
