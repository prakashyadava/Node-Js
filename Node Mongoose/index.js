const mongoose = require('mongoose');
const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/comFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
    
    // var newDish = Dishes({
    //     name: 'Pizza',
    //     description: 'Test'
    // });
    // newDish.save()
    // or we can also use
    Dishes.create({
        name: 'Pizza',
        description: 'Test'
    })
    .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id,{$set :{description: 'updated test'}},{new:true}).exec();
    })
    .then((dish)=>{
        console.log(dish);
        dish.comments.push({
            rating:5,
            comment:'I\'m getting a sinking feeling!',
            author: 'Leanardo di carpaccio'
        });
        return dish.save();
    })
    .then((dishes) => {
        console.log(dishes);

        return Dishes.remove({});
    })
    .then((dish) => {
        console.log(dish);
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    })
})
