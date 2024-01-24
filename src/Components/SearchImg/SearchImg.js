import { containerfill, selectContainer } from "../Container/Container"


const randomWords = ["landscape", "random", "forest", "beach"]

export const searchImg = (input) => {
    selectContainer().innerHTML= ""

    if (input === "") {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + randomWords[(Math.floor(Math.random() * 4))] + "&per_page=12&client_id=whdPS3v7rZ98nsGSfSnkXCGqsLd__vhzkUJXSKt_2bo" 
        
        fetch(url)
        .then((res) => {;
            if (res.ok) {
               
                return res.json()
                
            } else {
                alert(res.status)
            }
        })
        .then((res) => {
            containerfill(res.results, selectContainer())
            })
        
    } else {
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + input + "&per_page=12&client_id=whdPS3v7rZ98nsGSfSnkXCGqsLd__vhzkUJXSKt_2bo" 
        fetch(url)
        .then((res) => {
            if (res.ok) {
                
                return res.json()
            } else {

                alert(res.status)
            }
        })
        .then((res) => {
           if (res.results.length === 0) {
             alert("introduzca una palabra valida en el buscador")
           } else {
            containerfill(res.results, selectContainer())
           }
            
            })
    }
}