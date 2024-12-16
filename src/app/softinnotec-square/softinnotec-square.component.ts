import {Component, input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-softinnotec-square',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './softinnotec-square.component.html',
  styleUrl: './softinnotec-square.component.sass'
})
export class SoftinnotecSquareComponent {
  x = input();
  y = input();
}
