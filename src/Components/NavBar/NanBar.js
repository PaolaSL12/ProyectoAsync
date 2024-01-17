import { searchImg } from "../SearchImg/SearchImg";
import "./NavBar.css"

export const NavBar = () => {
    const nav = document.createElement("nav");
    const divLogo = document.createElement("div");
    const logo = document.createElement("img");
    const ulNav = document.createElement("ul");
    const liInicio = document.createElement("li");
    const liExplorar = document.createElement("li");
    const liCrear = document.createElement("li");
    const inicio = document.createElement("a");
    const explorar = document.createElement("a");
    const crear = document.createElement("a");
    const input = document.createElement("input");
    const divUser = document.createElement("div");
    const user = document.createElement("img");

    divLogo.className = "logoImg"
    divUser.className = "userImg"
    logo.src = "https://cdn-icons-png.flaticon.com/512/10092/10092385.png"
    user.src = "https://cdn-icons-png.flaticon.com/256/1144/1144760.png"
    liInicio.textContent = "Inicio";
    liExplorar.textContent = "Explorar";
    liCrear.textContent = "Crear";

    input.placeholder = "Buscar..."

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchImg(input)
        }
    })

    liInicio.addEventListener("click", (e) => {
        searchImg("random")
    })

    liExplorar.addEventListener("click", (e) => {
        input.focus()
    })

    liCrear.addEventListener("click", (e) => {
        window.open("https://www.pinterest.es/pin-creation-tool/")
    })

    divLogo.append(logo)
    liInicio.append(inicio);
    liExplorar.append(explorar);
    liCrear.append(crear);
    ulNav.append(liInicio);
    ulNav.append(liExplorar);
    ulNav.append(liCrear);
    divUser.append(user);
    nav.append(divLogo);
    nav.append(ulNav);
    nav.append(input);
    nav.append(divUser);
    document.body.querySelector("#navBar").append(nav)
}