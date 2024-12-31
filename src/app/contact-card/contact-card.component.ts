import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {VatIDFormatterPipe} from "../vat-idformatter.pipe";

@Component({
  selector: 'app-contact-card',
  imports: [
    CardComponent,
    VatIDFormatterPipe
  ],
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.sass'
})
export class ContactCardComponent {

}
