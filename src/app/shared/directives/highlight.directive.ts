import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true

})
export class HighlightDirective implements OnInit {
  @Input() appHighlight = 0;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlight > 100000) { // Highlight if value > 1 lakh
      this.el.nativeElement.style.backgroundColor = '#e8f5e9'; // light green background
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}
