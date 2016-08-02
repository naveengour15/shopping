var mongoose = require('mongoose');
var Schema = mongoose.Schema;	

var orderSchema = new Schema({
      user: { type: Schema.Types.ObjectId, ref: 'User'},
	  cart: { type: Object, required: true },
	  address: { type: String, required: true},
	  name: { type: String, required: true },
	  payment: { type: String, required: true }
});

var order = mongoose.model('order', orderSchema);
module.exports = order;
