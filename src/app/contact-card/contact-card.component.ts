import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {VatIDFormatterPipe} from "../vat-idformatter.pipe";
import {PhoneFormatterPipe} from "../phone-formatter.pipe";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {ButtonComponent, ButtonType} from "../button/button.component";

@Component({
  selector: 'app-contact-card',
  imports: [
    CardComponent,
    VatIDFormatterPipe,
    PhoneFormatterPipe,
    ButtonComponent,
  ],
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.sass'
})
export class ContactCardComponent {

  protected readonly ButtonType = ButtonType;
}
