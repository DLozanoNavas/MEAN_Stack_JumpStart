const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


var postSchema = new Schema({
	created_by: String,		//should be changed to ObjectId, ref "User"
	created_at: {type: Date, default: Date.now},
	text: String
});

var userSchema = new Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
})


mongoose.model('Post', postSchema);
mongoose.model('User', userSchema);
