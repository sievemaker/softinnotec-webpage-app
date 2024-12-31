import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  imports: [MatCardModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.sass'
})
export class CardComponent {
  header = input<string>();
}
