import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'kiz-counter',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() title = '';
  @Input() numberOfContracts = 0;
  @Input() image_src = '';
}
