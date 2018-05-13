import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent {

  @Input() hero
  @Input('master') masterName

}
