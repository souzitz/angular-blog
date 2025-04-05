import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true, // 👈 adiciona isso
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'], // 👈 corrigido aqui
})
export class MenuBarComponent {}
