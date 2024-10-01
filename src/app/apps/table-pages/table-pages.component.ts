import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-pages',
  templateUrl: './table-pages.component.html',
  styleUrl: './table-pages.component.scss',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
})
export class TablePagesComponent implements OnChanges {
  // Inputs
  @Input() active: number = 6;

  // Output
  @Output() onPageChanged = new EventEmitter<number>();

  buttonArray = new Array(10).fill(0);

  ngOnChanges(changes: SimpleChanges): void {
    for (const [key, value] of Object.entries(changes)) {
      (this as any)[key] = value.currentValue;
    }
  }

  pageChanged(pageNo: number) {
    this.onPageChanged.emit(pageNo);
  }
}
