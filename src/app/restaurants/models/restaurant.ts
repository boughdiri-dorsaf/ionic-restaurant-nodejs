import { Category } from "./category";

export class Restaurant {

  constructor(
    private _id: number,
    private _name: string,
    private _image: string,
    private _adress: string,
    private _category: number
  ){}

  public get category(): number {
    return this._category;
  }
  public set category(value: number) {
    this._category = value;
  }
  public get adress(): string {
    return this._adress;
  }
  public set adress(value: string) {
    this._adress = value;
  }
  public get image(): string {
    return this._image;
  }
  public set image(value: string) {
    this._image = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }



}
