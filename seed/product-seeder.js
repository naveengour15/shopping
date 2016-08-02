var Product = require("../models/product");
var mongoose = require('mongoose');

mongoose.connect('mongodb://root:rolemodel@ds033015.mlab.com:33015/shop-cart');

var products = [
	new Product({
		imagePath: '/images/book.jpg',
		title: 'Book!',
		description: 'This is English Grammer book',
		price: 100
	}),

	new Product({
		imagePath: '/images/laptop.jpg',
		title: 'Laptop!',
		description: 'This is chepest super laptop',
		price: 30000
	}),

	new Product({
		imagePath: '/images/mobile.jpg',
		title: 'Mobile!',
		description: 'This is beautiful smart phone',
		price: 5000
	}),
];

var done =0;
for (var i = 0; i < products.length; i++) {
		products[i].save(function (err, result){
			console.log(err || result);
			done++;
			if(done == products.length){
				exit();
			}
		});
}

function exit(){
	mongoose.disconnect();
}