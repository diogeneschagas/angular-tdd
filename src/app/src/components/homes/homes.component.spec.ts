import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { DataService } from '../../services/data.service';
import { HomesComponent } from './homes.component';
import { of } from 'rxjs';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesComponent ],
      providers:[
        { provide: DataService, useFatory: () => spyOnClass(DataService) }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    
  });

  beforeEach(() => {

    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of([
      {
        title: 'Home 1',
        image: 'assets/joao-pessoa.jpg',
        location: 'João Pessoa'
      },
      
      {
        title: 'Home 2',
        image: 'assets/joao-pessoa.jpg',
        location: 'Fortaleza'
      },
      
      {
        title: 'Home 3',
        image: 'assets/joao-pessoa.jpg',
        location: 'Natal'
      }
    ]));
    
    fixture.detectChanges();

  });

  it('should show homes', () => {
    
    

    expect(fixture.nativeElement.querySelectorAll('[data-test="home"]').length).toBe(3);
  });

  it('should show home info', () => {
    const home = fixture.nativeElement.querySelector('[data-test="home"]');

    expect(home.querySelector('[data-test="title"]').innerText).toEqual('Home 1');
    expect(home.querySelector('[data-test="location"]').innerText).toEqual('João Pessoa');
    expect(home.querySelector('[data-test="image"]')).toBeTruthy();

  });  
});
