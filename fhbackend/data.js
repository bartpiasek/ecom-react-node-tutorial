import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name:'Bart',
            email:'asdfg@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name:'Mis',
            email:'misola@gmail.com',
            password: bcrypt.hashSync('1234a', 8),
            isAdmin:false,
        },
        
    ],

    products: [
        {
            name:'Foodhunterki ebook 1',
            category:'Ebook',
            image:'/images/prod-1.png',
            price:120,
            countInStock: 10,
            brand:'Foodhunterki',
            rating: 4.5,
            numReviews:10,
            description:'Foodhunterki ebook nr1'
        },
        {
            name:'Foodhunterki ebook 2',
            category:'Ebook',
            image:'/images/prod-2.png',
            price:150,
            countInStock: 12,
            brand:'Foodhunterki',
            rating: 5,
            numReviews:20,
            description:'Foodhunterki ebook nr2'
        },
        {
            name:'Foodhunterki ebook 3',
            category:'Ebook',
            image:'/images/prod-3.png',
            price:170,
            countInStock: 15,
            brand:'Foodhunterki',
            rating: 4,
            numReviews:50,
            description:'Foodhunterki ebook nr3'
        },
        {
            name:'Szkolenie Social Media',
            category:'Szkolenia',
            image:'/images/prod-3.png',
            price:1000,
            brand:'Foodhunterki',
            countInStock: 0,
            rating: 4,
            numReviews:100,
            description:'Foodhunterki szkolenie SM'
        },
    ],
};
export default data;