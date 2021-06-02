import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController, ModalController, NavController, Platform } from '@ionic/angular';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';
import { EditerModalPage } from '../editer-modal/editer-modal.page';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {

  restaurant : any;
  idRestau: number;
  modalDataResponse: any;
  constructor(private restaurantServ : RestaurantService, private activatedRoute:ActivatedRoute,
    public alertController: AlertController, private nav:NavController, public modalController: ModalController ){ }

  ngOnInit(){
    this.idRestau =Number(this.activatedRoute.snapshot.paramMap.get('idRestau'));

  }

  ionViewWillEnter(){
    this.restaurantServ.getRestaurantById(this.idRestau).subscribe(response=>{
      //@ts-ignore
      this.restaurant=response.data[0];

    })
  }

  async supprimer(){
    const alert= await this.alertController.create({
      header:'Suppression',
      mode:'ios',
      message:'Voulez vous vraiment supprimer cette Restaurant : '+this.restaurant.name,
      buttons:[{
        text:'Annuler',
        role:'cancel',
      },
      {
        text:'Oui',
        handler:()=>{
          this.restaurantServ.deleteRestaurant(this.idRestau);
          this.nav.navigateBack('');
        }
    }
    ]
    })
    alert.present();

  }




}
