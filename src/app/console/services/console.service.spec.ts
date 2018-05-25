import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ConsoleService } from './console.service';

describe('ConsoleService', () => {

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConsoleService]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([ConsoleService], (service: ConsoleService) => {
    expect(service).toBeTruthy();
  }));
});
