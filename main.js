// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
// whdPS3v7rZ98nsGSfSnkXCGqsLd__vhzkUJXSKt_2bo
// <https://api.unsplash.com/search/photos?page=1&query=office>


import { selectContainer } from "./src/Components/Container/Container";
import { NavBar} from "./src/Components/NavBar/NanBar";
import { searchImg } from "./src/Components/SearchImg/SearchImg";


const randomWords2 = ["sunset", "happy", "flowers", "mountain"];


NavBar();
selectContainer();
searchImg(randomWords2[(Math.floor(Math.random() * 4))]);
