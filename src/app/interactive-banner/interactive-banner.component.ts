import { Component } from '@angular/core';
import {SoftinnotecChessboardComponent} from "../softinnotec-chessboard/softinnotec-chessboard.component";
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-interactive-banner',
  imports: [
    SoftinnotecChessboardComponent,
    MatCardModule
  ],
  templateUrl: './interactive-banner.component.html',
  standalone: true,
  styleUrl: './interactive-banner.component.sass'
})
export class InteractiveBannerComponent {

}
