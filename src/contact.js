import { heading } from "./home";

function contactForm() {
    const inputArr = [fullname, phone, email, message, submit];
}

function createContact () {
    const content = document.getElementById('content');
    content.appendChild(heading());
    const subHeading = document.createElement('h2');
    subHeading.innerText = 'Contact'
    content.appendChild(subHeading)

}

export default createContact;