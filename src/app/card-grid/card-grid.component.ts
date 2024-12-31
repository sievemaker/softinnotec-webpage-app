import { Component } from '@angular/core';
import {AboutCardComponent} from "../about-card/about-card.component";
import {ContactCardComponent} from "../contact-card/contact-card.component";

@Component({
  selector: 'app-card-grid',
  imports: [AboutCardComponent, ContactCardComponent],
  standalone: true,
  templateUrl: './card-grid.component.html',
  styleUrl: './card-grid.component.sass'
})
export class CardGridComponent {

}
