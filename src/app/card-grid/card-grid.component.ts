import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {AboutCardComponent} from "../about-card/about-card.component";

@Component({
  selector: 'app-card-grid',
  imports: [CardComponent, AboutCardComponent],
  standalone: true,
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.sass'
})
export class CardGridComponent {

}
