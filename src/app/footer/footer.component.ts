import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';


@Component({
  selector: 'app-footer',
  imports: [MatTabsModule, MatIconModule],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
