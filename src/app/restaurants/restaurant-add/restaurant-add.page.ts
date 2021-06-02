import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Restaurant } from './../models/restaurant';
import { RestaurantService } from './../services/restaurant.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.page.html',
  styleUrls: ['./restaurant-add.page.scss'],
})
export class RestaurantAddPage implements OnInit {
  Application={image:null};

  restaurantForm = new FormGroup({
    name : new FormControl('', Validators.required),
    image : new FormControl('', Validators.required),
    adresse : new FormControl('', Validators.required)
  });

  idCateg: any;
  sub:Subscription;
  constructor(
    private restaurantService : RestaurantService,
    private router : Router,
    private activatedRoute:ActivatedRoute,
    private navController : NavController) { }

    async imageselect() {
      //@ts-ignore
      const file = document.getElementById('img').files;
      this.Application.image = file[0]
   }

  /*refresh(){
    this.sub.unsubscribe();
    this.sub=this.restaurantService.getRestaurants(this.idCateg).subscribe(
      res=>{
        //@ts-ignore
        if(res.data[0]==undefined){
        this.exist=true;
        //@ts-ignore
        }

      },
      err=>{
      }
    )
  }*/

  addRestaurant(){
     const values = this.restaurantForm.value;
     var idCateg =this.activatedRoute.snapshot.paramMap.get('idCateg');
     var form=new FormData();
     form.append('name', String(values.name));
     form.append('image', this.Application.image);
     form.append('adresse',values.adresse)
     form.append('id_categorie',idCateg)
     this.restaurantService.addRestaurant(form);
    this.navController.back();
  }

  ngOnInit() {
    this.idCateg =this.activatedRoute.snapshot.paramMap.get('idCateg');
  }

}
