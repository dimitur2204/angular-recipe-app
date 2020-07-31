import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[activeOnClicked]',
  host: {
    '[class.active]': 'clicked',
    '(click)': '_toggle()'
  }
})
export class ActiveOnClickedDirective {
  @Input('activeOnClick') clicked = false;

  _toggle(){
     this.clicked= !this.clicked;
  }
  constructor() { }

}
