import { heading } from "./home";

function contactForm() {
    const inputArr = ['Full Name*', 'Phone*', 'Email*', 'Message*'];
    const form = document.createElement('form');
    form.id = 'form'

    inputArr.forEach(input => {
        const formInput = input != 'Message' ? document.createElement('input') :
            document.createElement('textarea');
        formInput.placeholder = input;
        input == 'Phone' ? (formInput.type = 'tel', 
            formInput.pattern = "[0-9]{3}-*[0-9]{3}-*[0-9]{4}"): 
            input == 'Email' ? formInput.type = 'email' : null;
        formInput.required = true
        form.appendChild(formInput);
    })
    const submit = document.createElement('input');
    submit.type = 'submit';
    form.appendChild(submit);



    return form;
}

function createContact () {
    const content = document.getElementById('content');
    content.appendChild(heading());
    const subHeading = document.createElement('h2');
    subHeading.innerText = 'Contact';
    content.appendChild(subHeading);
    content.appendChild(contactForm());

}

export default createContact;