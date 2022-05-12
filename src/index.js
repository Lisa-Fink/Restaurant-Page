import './style.css';
import createHeader from './nav.js';
import {createHome} from './home.js';
import createMenu from './menu';
import createContact from './contact';

const contentDiv = document.getElementById('content');


createHeader();

const tabs = document.getElementsByTagName('button');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', goToTab);
}

function goToTab(e) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    const tab = e.target.id;
    tab == 'home' ? createHome() :
        tab == 'menu' ? createMenu() : createContact();
}

// start with home page
contentDiv.innerHTML = '';
createHome();


