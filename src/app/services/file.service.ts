import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import carData from 'src/app/cars.json'
import { Car } from '../models';


@Injectable({
  providedIn: 'root'
})


export class FileService {


  cars: Car[] = carData;

  constructor() { }

  findCar(id: number) {
    return this.cars.find(car => car.id === id);
  }

  private wishlist: Car[] = [];

  getCar(id: number): Car | undefined {
    return this.cars.find((car) => car.id === id);
  }

  addToWishlist(car: Car) {
    this.wishlist.push(car);
  }

  getWishlist(): Observable<Car[]> {
    return of(this.wishlist);
  }

  clearWishlist() {
    this.wishlist = [];
  }

  removeFromWishlist(car: Car) {
    this.wishlist = this.wishlist.filter((c) => c.id !== car.id);
  }

  isInWishlist(car: Car) {
    return this.wishlist.some((c) => c.id === car.id);
  }
}
