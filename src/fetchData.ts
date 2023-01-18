import {toast} from "react-toastify";

export const fetchRestaurantsData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/restaurants/getRestaurants"
        ).then((data) => {
            return data.json();
        });
        return response;
    } catch(error: any){
        toast.error(error.message);
    }
};

export const fetchChefsData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/chefs/getChefs"
        ).then((data) => {
            return data.json();
        });
        return response;
    } catch(error: any){
        toast.error(error.message);
    }
};
export const fetchDishesData = async () => {
    try{
        const response = await fetch(
            "http://localhost:3001/api/Dishes/getDishes"
        ).then((data) => {
            return data.json();
        });
        return response;
    } catch(error: any){
        toast.error(error.message);
    }
};