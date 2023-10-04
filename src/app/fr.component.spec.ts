import { TestBed } from '@angular/core/testing';
import { FrComponent } from './fr.component';

describe('FrComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [FrComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FrComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fox-roam'`, () => {
    const fixture = TestBed.createComponent(FrComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fox-roam');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(FrComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'fox-roam app is running!'
    );
  });
});
