import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent {

  from: string | null = null;
  to: string | null = null;

  @Output() filterChange = new EventEmitter<{ from: string | null; to: string | null }>();

  onFilterChange(): void {
    this.filterChange.emit({
      from: this.from,
      to: this.to
    });
  }
}
