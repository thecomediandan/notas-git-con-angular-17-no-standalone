import { AfterViewInit, Component } from '@angular/core';
import * as Icons from '../assets/img/icons.json';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Iconos } from './model/Icons.model';
// ? Hacemos referencia a la variable de Prettify
declare var PR: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'Estos son mis Apuntes de Git :D';
  MyIcons: Iconos = Icons as any;
  constructor(private sanitizer: DomSanitizer) {}

  getIcono(nombre: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.MyIcons[nombre]);
  }
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      window.onload = function() {
        PR.prettyPrint();
      };
    }
  }
}
