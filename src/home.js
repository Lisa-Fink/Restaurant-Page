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

    const image = document.createElement('div')
    image.id = 'image-div'
    image.appendChild(bread)
    image.appendChild(cupcake)
    image.appendChild(cross)


    return image;
}

function copy() {
    const copy = document.createElement('h2');
    copy.innerText = 'Creating the finest baked goods for 45 years';
    return copy;
}

function createHome() {
    const content = document.getElementById('content')
    content.appendChild(heading())
    content.appendChild(image())
    content.appendChild(copy())
}

export default createHome;
    
    

    

    

