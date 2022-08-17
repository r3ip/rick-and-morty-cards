import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core'
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;
  const monck = { id: 1, name: 'Rick Sanchez', gender: '', image: '', origin: { name: '' }, species: '' }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), HttpClientTestingModule, MatCardModule],
      declarations: [CardsComponent],
      providers: [TranslateService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe existir el componente CardsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('antes de iniciar el component la propiedad "character" no cuenta con datos', () => {
    expect(component.character).toEqual(undefined);
  });

  it('al recibir los datos del componente padre la propiedad "character" debe ser llenada con datos', () => {
    component.character = { id: 1, name: 'Rick Sanchez', gender: '', image: '', origin: { name: '' }, species: '' };
    expect(component.character).toEqual(monck);
  })

});
