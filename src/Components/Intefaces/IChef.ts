import { IRestaurant } from "./IRestaurant";

export interface IChef{
    name:string;
    chefImage:string;
    chefsRestaurants?:Array<IRestaurant>[];
}
