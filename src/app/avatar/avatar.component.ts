import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, SimpleChanges} from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.sass'
})
export class AvatarComponent implements OnInit {

  src = input<string>('');
  altText = input<string>();
  size = input<number>();
  name = input<string>();
  position = input<string>();
  domSanitizer = inject(DomSanitizer);
  imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.src());

  ngOnInit(): void {
    this.imagePath = this.domSanitizer.bypassSecurityTrustUrl(this.src());
  }
}
