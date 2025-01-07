import {Component, input, model, OnInit, signal} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-softinnotec-square',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './softinnotec-square.component.html',
  styleUrl: './softinnotec-square.component.sass'
})
export class SoftinnotecSquareComponent implements OnInit {

  x = input<number>(0);
  y = input<number>(0);
  squareClass = model('empty');
  squareLabel?: number;

  ngOnInit(): void {
    this.squareLabel = (this.y() - 1) * 8 + this.x();
  }
}
