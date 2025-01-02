import { CommonModule } from '@angular/common';
import {Component, input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

export enum ButtonType {
  Internal = 'internal',
  External = 'external'
}

@Component({
  selector: 'app-button',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  standalone: true,
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  label = input<string>();
  icon = input<string>();
  type = input<ButtonType>();
}
