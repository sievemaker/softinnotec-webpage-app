import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SoftinnotecChessboardComponent} from "./softinnotec-chessboard/softinnotec-chessboard.component";
import {BannerComponent} from "./banner/banner.component";
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-root',
    imports: [SoftinnotecChessboardComponent, BannerComponent, RouterOutlet, MatCardModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'softinnotec-webpage-app';
}
