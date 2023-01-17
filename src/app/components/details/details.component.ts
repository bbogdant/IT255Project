
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import carData from 'src/app/cars.json'
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
session: any;
fileService: any;
router: any;


constructor(private route: ActivatedRoute, private service: FileService, private http: HttpClient) {}

ngOnInit() {
  this.route.params.subscribe(
    (params) => {
    const id = +params['id'];
    this.getCar(id);
    }
    );

}

car: Car[] = carData;

getCar(id: number) {
  if (this.car) {
    this.car = this.car.filter((car) => car.id === id);
  }
}
}




  

  


