import { TestBed } from '@angular/core/testing';
import { HomePersonComponent } from './homePerson.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomePersonComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomePersonComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularPerson'`, () => {
    const fixture = TestBed.createComponent(HomePersonComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularPerson');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomePersonComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AngularPerson app is running!');
  });
});