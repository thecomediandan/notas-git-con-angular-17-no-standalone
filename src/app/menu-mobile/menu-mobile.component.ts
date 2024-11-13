import { Component } from '@angular/core';
import * as Icons from './../../assets/img/icons.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Iconos } from '../model/Icons.model';

declare var bootstrap: any;

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.css'
})
export class MenuMobileComponent{
  isVisible: boolean = true;
  MyIcons: Iconos = Icons as any;
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }
  
  setVisibility(hidden: boolean): void {
    this.isVisible = hidden;
    if (hidden) {
      const eventoClick = new MouseEvent('click', { view: window, bubbles: true, cancelable: false });
      // Disparar el evento de clic en el div div.
      const closeButton = document.querySelector('.btn-close');
      closeButton?.dispatchEvent(eventoClick);
    }
  }
}
