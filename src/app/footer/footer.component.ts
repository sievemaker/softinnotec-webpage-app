import {AfterViewInit, Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {NgClass} from "@angular/common";
import {NgcCookieConsentService} from "ngx-cookieconsent";


@Component({
  selector: 'app-footer',
  imports: [MatTabsModule, MatIconModule, NgClass],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  isModalVisible = false;
  cookieConsentService = inject(NgcCookieConsentService);

  toggleModal(): void {
    this.cookieConsentService.open();
  }

}
