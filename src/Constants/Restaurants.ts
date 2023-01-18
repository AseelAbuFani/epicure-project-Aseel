import Claro from '../assets/Cards/claro.png';
import Claro2 from '../assets/Cards/claro2.png';
import KabKem from '../assets/Cards/KabKem.png';
import KabKem2 from '../assets/Cards/KabKem2.png';
import Messa from '../assets/Cards/Messa.png';
import Messa2 from '../assets/Cards/Messa2.png';
import nithanThai from '../assets/Cards/nithan-thai.png';
import Yapan from '../assets/Cards/Yapan.png';
import TigerLily from '../assets/Cards/tiger-lily.svg';
import Lumina from '../assets/Cards/Lumina.svg';
import OpenNow from '../assets/openNow.png';
import four from '../assets/Rating/four.png';
import two from '../assets/Rating/two.png';
import one from '../assets/Rating/one.png';
import { IRestaurant } from '../Components/Intefaces/IRestaurant';
import { on } from 'events';


export const Restaurants:IRestaurant[]=[
    {
        name:'Claro',
        chef:'Ran Shmueli',
        image:Claro,
        rating:four,
    },
    {
        name:'Kab Kem',
        chef:'Yariv Malili',
        image:KabKem,
        rating:one,
    },
    {
        name:'Messa',
        chef:'Aviv Moshe',
        image:Messa,
        rating:one, 
    },
    
    {
        name:'Nitan Thai',
        chef:'Shahaf Shabtay',
        image:nithanThai,
        rating:one,
    },
    {
        name:'Lumina',
        chef:'Meir Adoni',
        image:Lumina,
        rating:one,
    },
    
    {
        name:'Tiger Lilly',
        chef:'Yanir Green',
        image:TigerLily,
        rating:four,
    },
    {
        name:'Ya Pan',
        chef:'Yuval Ben Moshe',
        image:Yapan,
        rating:two,
    },
    {
        name:'Claro - U.S',
        chef:'Ran Shmueli',
        image:Claro2,
        rating:one,
    },
    {
        name:'Kab Kem - U.S',
        chef:'Yariv Malili',
        image:KabKem2,
        rating:two,
    },
    {
        name:'Messa - U.S',
        chef:'Aviv Moshe',
        image:Messa2,
        rating:one,
    },
    
    
];

