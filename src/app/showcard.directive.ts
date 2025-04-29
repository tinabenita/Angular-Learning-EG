import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShowcard]',
  standalone: true,
})
export class ShowcardDirective{
  constructor(
    private renderer: Renderer2, 
    private elementRef: ElementRef
  ) {}

  toolTip ='';


  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    const value= this.elementRef.nativeElement.innerText;

    const tooltipDiv = this.renderer.createElement('div');
    this.renderer.addClass(tooltipDiv, 'tooltip');
    // this.renderer.setStyle(tooltipDiv, 'position', 'absolute');
    // this.renderer.setStyle(tooltipDiv, 'background', 'lightgray');
    // this.renderer.setStyle(tooltipDiv, 'padding', '5px');
    // this.renderer.setStyle(tooltipDiv, 'border', '1px solid black');
    // this.renderer.setStyle(tooltipDiv, 'borderRadius', '4px');
    this.renderer.setStyle(tooltipDiv, 'top', `${event.clientY + 10}px`);
    this.renderer.setStyle(tooltipDiv, 'left', `${event.clientX + 10}px`);
    // this.renderer.setStyle(tooltipDiv, 'zIndex', '1000');
    this.renderer.setProperty(tooltipDiv, 'innerText', value);
    this.renderer.appendChild(document.body, tooltipDiv);
    this.toolTip = tooltipDiv;


    // let datas = this.block.nativeElement.getBoundingClientRect();
    // console.log("datas = ", datas);
    
  }



  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.toolTip) {
      this.renderer.removeChild(document.body, this.toolTip);
      this.toolTip = '';
    }
  }
}
