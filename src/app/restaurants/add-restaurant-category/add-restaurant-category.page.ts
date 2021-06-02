import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-restaurant-category',
  templateUrl: './add-restaurant-category.page.html',
  styleUrls: ['./add-restaurant-category.page.scss'],
})
export class AddRestaurantCategoryPage implements OnInit {

  categoryForm = new FormGroup({
    nom : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required)
  });

  constructor(
    private categorieService : CategoryService,
    private navController : NavController) { }

    imageselect(){
      //@ts-ignore
      const file = document.getElementById('img').files;
      this.categoryForm.value.image = file[0];
    }

  addCategory(){
    const values = this.categoryForm.value;
    console.log(values.image)
    var form = new FormData();
    form.append('image', values.image);
    form.append('name', String(values.nom));
    this.categorieService.addCategory(form);

    this.navController.back()
  }

  ngOnInit() {
  }

}
