import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './apps/button/button.component';
import { TablePagesComponent } from './apps/table-pages/table-pages.component';
import { ThemeEnum } from './theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,

    // Components
    ButtonComponent,
    TablePagesComponent,
  ],
})
export class AppComponent {
  title = 'ANGULAR_MATERIAL';
  themeName = 'DEFAULT';
  mode = 'LIGHT';

  themeEnum = ThemeEnum;

  activePage = 1;

  constructor() {
    // document.onclick = (e) => {
    //   this.activePage = Math.ceil(Math.random() * 10);
    // };
  }

  switchTheme(themeName: ThemeEnum) {
    document.querySelector('html')?.setAttribute('theme', themeName);
    this.themeName = themeName.toUpperCase();
  }

  switchMode() {
    const mode = document.querySelector('body')?.getAttribute('mode');
    if (mode == 'light') {
      document.querySelector('body')?.setAttribute('mode', 'dark');
      this.mode = 'DARK';
    } else {
      document.querySelector('body')?.setAttribute('mode', 'light');
      this.mode = 'LIGHT';
    }
  }

  onPageChanged(pageNo: number) {
    this.activePage = pageNo;
  }
}
