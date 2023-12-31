import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputData, SectionData } from '../models';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dynamic-section-display',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './dynamic-section-display.component.html',
  styleUrls: ['./dynamic-section-display.component.scss']
})
export class DynamicSectionDisplayComponent {
  @Input() data?: SectionData;

  protected getResult(section: InputData): number {
    return section.reduceRight((carry, value) => carry + value, 0);
  }
}
