import { IDish } from "./IDish";

export interface IRestaurant{
    name:string;
    chef:string;
    image:string;
    open?:string;
    rating?:string;
    dishesRestaurant?:Array<IDish>[];
}
