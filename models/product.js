var mongoose = require('mongoose');
var Schema = mongoose.Schema;	

var productSchema = new Schema({
      imagePath: { type: String, required: true },
	  title: { type: String, required: true },
	  description: { type: String, required: true},
	  price: { type: String, required: true }
});

var product = mongoose.model('product', productSchema);

module.exports = product;
