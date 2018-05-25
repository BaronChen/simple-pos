import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ConsoleEffects } from './console.effects';

describe('ConsoleService', () => {
  let actions$: Observable<any>;
  let effects: ConsoleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConsoleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ConsoleEffects);
  });

  it('should be created', () => {
    actions$ = Observable.throw('');
    expect(effects).toBeTruthy();
  });
});
