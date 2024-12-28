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

  x = input();
  y = input();
  squareClass = model('empty');

  ngOnInit(): void {
      console.log(this.y())
  }

}
