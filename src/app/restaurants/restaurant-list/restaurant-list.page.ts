import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {

  restaurants : any;
  idCateg: number;

  constructor(private restaurantServ : RestaurantService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(){
    this.idCateg = Number(this.activatedRoute.snapshot.paramMap.get('idCateg'));
    //this.restaurants = this.restaurantServ.getRestaurants(this.idCateg);
  }

  ionViewWillEnter() {
    this.restaurantServ.getRestaurants(this.idCateg).subscribe(response=>{
      //console.log(val);
      var lst=[]
      //@ts-ignore
      for (let i = 0; i < response.data.length; i++) {
        //@ts-ignore
        lst.push(response.data[i]);
      }
      console.log(lst)
      this.restaurants=lst;
    })
  }

}
