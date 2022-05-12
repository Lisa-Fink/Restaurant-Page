import { heading } from "./home";

function contactForm() {
    const inputArr = ['Full Name*', 'Phone*', 'Email*', 'Message*'];
    const form = document.createElement('form');
    form.id = 'form';

    const formTitle = document.createElement('h4');
    formTitle.innerText = 'Send us a message:';
    form.appendChild(formTitle);

    inputArr.forEach(input => {
        const formInput = input != 'Message*' ? document.createElement('input') :
            document.createElement('textarea');
        formInput.placeholder = input;
        input == 'Phone*' ? (formInput.type = 'tel', 
            formInput.pattern = "[0-9]{3}-*[0-9]{3}-*[0-9]{4}"): 
            input == 'Email*' ? formInput.type = 'email' : null;
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

    const contactTel = document.createElement('p');
    const contactEmail = document.createElement('p');

    contactTel.innerText = 'Phone: 555-555-BAKE';
    contactEmail.innerText = 'Email: BakeShop@BellasBakeShop.com';

    content.appendChild(subHeading);
    content.appendChild(contactTel);
    content.appendChild(contactEmail);
    content.appendChild(contactForm());

}

export default createContact;