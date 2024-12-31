import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-grid',
  imports: [CardComponent],
  standalone: true,
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.sass'
})
export class CardGridComponent {

}
