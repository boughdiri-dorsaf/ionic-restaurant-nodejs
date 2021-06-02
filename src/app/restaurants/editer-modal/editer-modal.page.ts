import { Restaurant } from './../models/restaurant';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editer-modal',
  templateUrl: './editer-modal.page.html',
  styleUrls: ['./editer-modal.page.scss'],
})
export class EditerModalPage implements OnInit {
  @Input() restaurant: Restaurant;



  constructor( public modalController: ModalController ) { }

  ngOnInit() {
  }

  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalController.dismiss(closeModal);
  }

  editRestaurant(){

  }

}
