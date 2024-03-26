import { Component } from '@angular/core';
import * as Icons from './../../assets/img/icons.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Iconos } from '../model/Icons.model';

// interface Iconos {
//   [key: string]: string;
// }

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  MyIcons: Iconos = Icons as any;
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }
}