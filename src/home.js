import breadImg from './bread.jpg';
import cupcakeImg from './cupcake.jpg';
import crossImg from './cros.jpg';

function heading() {
    const heading = document.createElement('h1');
    heading.innerText = 'Bella\'s Bakeshop & Cafe';
    return heading;
}

function image() {
    const bread = document.createElement('img');
    bread.src = breadImg;

    const cupcake = document.createElement('img');
    cupcake.src = cupcakeImg;

    const cross = document.createElement('img');
    cross.src = crossImg;

    const image = document.createElement('div');
    image.id = 'image-div';
    image.appendChild(bread);
    image.appendChild(cupcake);
    image.appendChild(cross);


    return image;
}

function copy() {
    const copy = document.createElement('h3');
    copy.innerText = 'Creating the finest baked goods for 45 years';
    return copy;
}

function hours() {
    const hoursArr = [
            'Sunday: 6am-3pm',
            'Monday: closed',
            'Tuesday: 6am-8pm',
            'Wednesday: 6am-8pm',
            'Thursday: 6am-8pm',
            'Friday: 6am-10pm',
            'Saturday: 6am-10pm',
    ]

    const hoursHeading = document.createElement('h4');
    hoursHeading.innerText = 'Hours';

    const ul = document.createElement('ul');
    hoursArr.forEach(day => {
        const li = document.createElement('li');
        li.innerText = day;
        ul.appendChild(li);
    })
    
    const hours = document.createElement('div');
    hours.classList.add('home-info');
    hours.appendChild(hoursHeading);
    hours.appendChild(ul);
    return hours;
}

function location() {
    const locHeading = document.createElement('h4');
    locHeading.innerText = 'Location';

    const address = document.createElement('span');
    address.innerText = '123 Pastry Ln Little Scone NY 10001';

    const location = document.createElement('div');
    location.classList.add('home-info');
    location.appendChild(locHeading);
    location.appendChild(address);
    return location;
}

function createHome() {
    const content = document.getElementById('content');
    content.appendChild(heading());
    content.appendChild(image());
    content.appendChild(copy());
    content.appendChild(hours());
    content.appendChild(location());
}



export {createHome, heading};
    
    

    

    

