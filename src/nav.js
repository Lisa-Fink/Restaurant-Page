import { createHome } from "./home";

function createHeader() {
    const header = document.getElementById('header');
    const nav = document.createElement('nav');
    
    const home = document.createElement('button');
    home.id = 'home';
    home.innerText = " Home ";
    
    const menu = document.createElement('button');
    menu.id = 'menu';
    menu.innerText = " Menu ";
    
    const contact = document.createElement('button');
    contact.id = 'contact';
    contact.innerText = " Contact ";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    header.appendChild(nav);
} 




export default createHeader;