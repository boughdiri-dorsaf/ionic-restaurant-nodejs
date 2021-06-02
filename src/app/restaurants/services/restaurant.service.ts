import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants = [
    new Restaurant(1, "Eat Me", "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg", "tunis", 1),
    new Restaurant(2, "Eat Me 2", "https://img-19.ccm2.net/8vUCl8TXZfwTt7zAOkBkuDRHiT8=/1240x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg", "tunis", 2),
    new Restaurant(3, "Eat Me 3", "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300", "tunis", 2),
    new Restaurant(4, "Eat Me 1", "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg", "tunis", 1),
    new Restaurant(5, "Eat Me 4", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png", "tunis", 1),
  ]
  private platform: Platform;
  constructor(private http:HttpClient, platform: Platform) { this.platform = platform;}

  getRestaurants(idCateg :any){
  return this.http.get('http://localhost:3000/restaurant/'+idCateg);
  }

  getRestaurantById(id: any){
    //return this.restaurants[id];
    return this.http.get('http://localhost:3000/restaurantById/'+id);
  }

  addRestaurant(r : any){
    return this.http.post('http://127.0.0.1:3000/restaurant',r).subscribe();
  }

  editRestaurant(idResto: number,r : Restaurant){
    this.restaurants[idResto] = r;
  }

  deleteRestaurant(idResto){
    return this.http.delete('http://localhost:3000/restaurant/'+idResto).subscribe();
  }
}
