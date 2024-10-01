import { Component } from '@angular/core';
import { TablePagesComponent } from '../table-pages/table-pages.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.scss',
  standalone: true,
  imports: [TablePagesComponent],
})
export class NewPageComponent {}
