import {HEROES} from './../../models/hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})

export class HeroParentComponent {
  heroes = HEROES;
  master= 'Master'
}
