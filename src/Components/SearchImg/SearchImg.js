import { containerfill, selectContainer } from "../Container/Container"
console.log(selectContainer());

export const searchImg = (input) => {
    selectContainer().innerHTML= ""
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + input.value + "&per_page=12&client_id=whdPS3v7rZ98nsGSfSnkXCGqsLd__vhzkUJXSKt_2bo" 

    fetch(url)
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            alert(res.status)
        }
    })
    .then((res) => {
        console.log(res.results);
        containerfill(res.results, selectContainer())
        })
    
}