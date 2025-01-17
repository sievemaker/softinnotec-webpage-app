import {AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SoftinnotecChessboardComponent} from "./softinnotec-chessboard/softinnotec-chessboard.component";
import {BannerComponent} from "./banner/banner.component";
import { MatCardModule } from '@angular/material/card';
import {CardComponent} from "./card/card.component";
import {CardGridComponent} from "./card-grid/card-grid.component";
import {FooterComponent} from "./footer/footer.component";
import {InteractiveBannerComponent} from "./interactive-banner/interactive-banner.component";

@Component({
    selector: 'app-root',
  imports: [BannerComponent, RouterOutlet, MatCardModule, CardGridComponent, FooterComponent, InteractiveBannerComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  title = 'softinnotec-webpage-app';

  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      // Simulate loading completion, can be replaced with actual logic
      this.loading = false;
    }, 100); // Adjust the time to match your app's load time  }
  }

}
