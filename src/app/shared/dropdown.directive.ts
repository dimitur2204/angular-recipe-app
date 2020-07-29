import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
    const el:HTMLElement = this.el.nativeElement;
    const child = Array.from(el.children).find(c => c.classList.contains('dropdown-menu'));
    if (child.classList.contains('show')) {
      child.classList.remove('show');
    }
    else{
      child.classList.add('show');
    }
  }
  constructor(private el:ElementRef) {

   }
  
}
