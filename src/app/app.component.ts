import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { ThemeEnum } from './theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
})
export class AppComponent {
  title = 'ANGULAR_MATERIAL';
  themeName = 'DEFAULT';
  mode = 'LIGHT';

  themeEnum = ThemeEnum;

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
}
