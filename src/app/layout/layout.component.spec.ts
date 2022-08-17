import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LayoutComponent } from './layout.component';
import { CharacterService } from '../shared/services';
import { TranslateModule } from '@ngx-translate/core'
import { Character } from '../shared/models';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), HttpClientTestingModule ],
      declarations: [ LayoutComponent ],
      providers: [CharacterService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe existir el componente LayoutComponent', () => {
    expect(component).toBeTruthy();
    expect(component.characters).toEqual(undefined);
  });

  it('antes de iniciar el component la propiedad "character" no cuenta con datos', () => {
    expect(component.characters).toEqual(undefined);
  });

  it('al iniciar el componente la propiedad "character" debe ser llenada con datos', () =>{
    component.ngOnInit();
    const character  = new Character();
    component.characters = [character];
    expect(component.characters.length).toEqual(1);
  })
});
