import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent {
  private _masterName: string

  @Input() hero
  @Input('master')
    set masterName(master) {
      this._masterName = master.toUpperCase()
    }

    get masterName() {
      return this._masterName
    }

}
