import { heading } from "./home";


function createSection(arr){
    const sectionMenu = document.createElement('ul')
    arr.forEach(item => {
        const li = document.createElement('li')
        li.innerText = item
        sectionMenu.appendChild(li)
    })
    return sectionMenu
}

function coffeMenu() {
    const coffeeArr = ['Latte', 'Cappuccino', 'Cafe Mocha', 'Cafe Bella']
    
    const heading = document.createElement('h3')
    heading.innerText = 'Coffee Specialties'
    
    const coffee = document.createElement('div')
    coffee.classList.add('menu')
    coffee.appendChild(heading)
    coffee.appendChild(createSection(coffeeArr))
    return coffee
}

function cafeMenu() {
    const cafeArr = ['Spinach Quiche', 'Quiche Lorraine', 'Buffalo Chicken Sandwich', 
            'Tuna Melt', 'Soup of the Day']

    const heading = document.createElement('h3')
    heading.innerText = 'Cafe Menu'

    const cafe= document.createElement('div')
    cafe.classList.add('menu')
    cafe.appendChild(heading)
    cafe.appendChild(createSection(cafeArr))
    return cafe
}

function bakeryMenu(){
    const menus = [
        {
            title: 'Amazing Cupcakes',
            arr: ['Red Velvet', 'Vanilla Bean', 'Double Chocolate', 
            'Peanut Butter Surprise']
        },
        {
            title: 'Scrumptious Pies',
            arr: ['Very Cherry', 'Traditional Apple', 'Apple Crumb', 'Blueberry Dream']
        },
        {
            title: 'Decadent Cakes',
            arr: ['Our Famous 12 Layer Carrot Cake', 'Decadent Chocolate Mousse Cake',
            'Bella\'s Strawberry Dream Angel Food Cake']
        },
        {
            title: 'Cookies',
            arr: ['Jumbo Black & White', 'Jumbo Chocolate Chip', 'Rainbow Cookies']
        }  
    ]

    const heading = document.createElement('h3')
    heading.innerText = 'Baked Goods'
    const bakery = document.createElement('div')
    bakery.classList.add('menu')
    bakery.appendChild(heading)

    menus.forEach(section => {
        const sectionDiv = document.createElement('div')
        const heading = document.createElement('h4')
        heading.innerText = section.title
        sectionDiv.appendChild(heading)
        sectionDiv.appendChild(createSection(section.arr))
        bakery.appendChild(sectionDiv)
    })

    return bakery
}


function createMenu() {
    const content = document.getElementById('content');
    content.appendChild(heading())
    const subHeading = document.createElement('h2');
    subHeading.innerText = 'Menu'
    content.appendChild(subHeading)
    content.appendChild(coffeMenu())
    content.appendChild(cafeMenu())
    content.appendChild(bakeryMenu())

}

export default createMenu