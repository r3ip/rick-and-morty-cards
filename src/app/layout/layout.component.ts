import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Character } from '../shared/models';
import { CharacterService } from '../shared/services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  characters: Character[];
  constructor(
    private characterService: CharacterService,
    public translate :TranslateService
    ) {
      translate.addLangs(['en', 'es']);
      translate.setDefaultLang('en');
    }

  ngOnInit(): void {
    this.getChararacters();
  }

  getChararacters(){
    this.characterService.getCharacters().subscribe({
      next: (res) => {
        const { results } = res;
        this.characters = results;
      }
    });
  }
}
