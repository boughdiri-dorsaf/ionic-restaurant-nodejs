import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-restaurant-categories',
  templateUrl: './restaurant-categories.page.html',
  styleUrls: ['./restaurant-categories.page.scss'],
})
export class RestaurantCategoriesPage {
  categories : any;

  constructor(private categorieServ : CategoryService) { }

  ngOnInit() {
    this.categorieServ.getCategories().subscribe(response=>{
      //console.log(val);
      var lst=[]
      //@ts-ignore
      for (let i = 0; i < response.data.length; i++) {
        //@ts-ignore
        lst.push(response.data[i].row);
      }
      this.categories=lst;
    })
  }

  ionViewWillEnter() {
    this.categorieServ.getCategories().subscribe(response=>{
      //console.log(val);
      var lst=[]
      //@ts-ignore
      for (let i = 0; i < response.data.length; i++) {
        //@ts-ignore
        lst.push(response.data[i].row);
      }
      this.categories=lst;
    })
  }

}
