import "./Container.css"

export const selectContainer = () => {
    const containerImg = document.querySelector("#container");
    return containerImg
}


export const containerfill = (res, container) => {

    for (const element of res) {
        const divImg = document.createElement("div");
        const img = document.createElement("img");
        img.width = 300
        img.height = 400
        img.src = element.urls.regular

        img.addEventListener("click", (e) => {
            window.open(e.target.src)
        })

        divImg.append(img);
        container.append(divImg);
    }

    
}