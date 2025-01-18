import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-footer',
  imports: [MatTabsModule, MatIconModule, NgClass],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  isModalVisible = false;

  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
