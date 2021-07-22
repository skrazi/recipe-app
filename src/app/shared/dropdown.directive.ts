import { Directive, ElementRef, Host, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.show') isOpen: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') clickEvent() {
    if(this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement.nextSibling, 'show');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement.nextSibling, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}