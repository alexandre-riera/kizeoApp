import { Component, OnInit } from '@angular/core';
import {AgenceTitleComponent} from './components/agenceTitle/agence.title.component';
import {SidebarMenuComponent} from './components/sidebar-menu/sidebar-menu.component';
import {CounterComponent} from './components/counter/counter.component';
import { CommonModule } from '@angular/common';
import { TotalContratsService } from '../app/services/total-contrats.service';
import { Observable } from 'rxjs';

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
  constructor(private _contratsService: TotalContratsService){}

  public contrats$!: Observable<any>;

  title = 'KizeoAppFront';

  ngOnInit(){
    this.contrats$ = this._contratsService.getContrats();
    this.contrats$.subscribe(value => console.log(value));
  }
}
