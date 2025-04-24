import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorchangingcell]',
  standalone: true
})
export class ColorchangingcellDirective implements OnInit {

  @HostBinding('style.color')
  color!: string;

  ngOnInit(): void {
    this.color = 'black'; 
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'red';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'black';
  }
}
