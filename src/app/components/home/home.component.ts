import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import carData from 'src/app/cars.json'
import { FileService } from 'src/app/services/file.service';
import { SessionService } from 'src/app/services/session.service';
import { Car } from 'src/app/models';


exportAs: 'filteredCars'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  marka: string;
  podaci: any[];
 

  public sort:string
  cars: any[];
  selectedSortOption: any;
  wishListService: any;
  errorMessage: string;
  rezultat: any[];
  message: string;
  showMessage: boolean;

  constructor(
    private router: Router,
    private session: SessionService,
    private fileService: FileService) { }


    ngOnInit(): void {
    }

    car: Car[] = carData;
    car1: Car[] = carData;
    wishlist: Car[] = [];
  
  
    openCarDetails(id: number): void{
      this.router.navigate(['/details', id])
    }

    addToWishList(id: number): void {
      if (this.session.getIsLoggedIn()) {
        const car = this.fileService.getCar(id);
        if (car) {
          this.fileService.addToWishlist(car);
          alert("You successfully added car to wish list")
        } else {
        }
      } else {
        this.router.navigate(['/login']);
      }
    }
  item(item: any) {
    throw new Error('Method not implemented.');
  }


  sortCars(sortBy: 'year' | 'price') {
    this.car.sort((a, b) => {
      if (sortBy === 'year') {
        return a.year - b.year;
      } else {
        return a.price - b.price;
      }
    });
  }


  searchCars(make: string) {
    this.car = this.car.filter((car) => car.make.includes(make));
  }

  resetCars() {
    this.car = this.car1;
  }
}


