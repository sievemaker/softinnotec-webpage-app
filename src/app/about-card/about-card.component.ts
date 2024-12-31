import { Component } from '@angular/core';
import {CardComponent} from "../card/card.component";
import {AvatarComponent} from "../avatar/avatar.component";

@Component({
  selector: 'app-about-card',
  imports: [
    CardComponent,
    AvatarComponent
  ],
  standalone: true,
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.sass'
})
export class AboutCardComponent {

}
