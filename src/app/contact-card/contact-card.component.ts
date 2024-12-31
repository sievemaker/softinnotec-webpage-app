import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {VatIDFormatterPipe} from "../vat-idformatter.pipe";
import {PhoneFormatterPipe} from "../phone-formatter.pipe";

@Component({
  selector: 'app-contact-card',
  imports: [
    CardComponent,
    VatIDFormatterPipe,
    PhoneFormatterPipe
  ],
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.sass'
})
export class ContactCardComponent {

}
