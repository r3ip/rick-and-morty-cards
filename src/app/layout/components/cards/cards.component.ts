import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/index';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() character: Character;
  
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
  }

}
