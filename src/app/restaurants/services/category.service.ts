import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories = [
      new Category(1, "Italien", "https://i.pinimg.com/originals/e5/1c/dd/e51cdd345330a303702fe6999f53ea7c.jpg"),
      new Category(2, "Français", "https://i.pinimg.com/600x315/e0/bf/96/e0bf963a1400673fc43a8c4c2e51c716.jpg"),
      new Category(3, "Local", "http://www.flags-and-anthems.com/media/flags/flagge-tunesien.gif")
  ]

  constructor(private http:HttpClient) { }

  getCategories(){
    //return [...this.categories];
    return this.http.get('http://localhost:3000/categories');

  }

  addCategory(c : any){
    //this.categories.push(c);
    return this.http.post('http://localhost:3000/categories',c).subscribe();

  }
}
