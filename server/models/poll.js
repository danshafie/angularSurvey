var mongoose = require("mongoose")


var pollSchema = new mongoose.Schema({
	question: String,
	createdBy: String,
	createdAt: {type: Date, default: Date.now()},
	options: [
		{
			option: String,
			like: Number,
		},
		{
			option: String,
			like: Number
		},
		{
			option: String,
			like: Number
		},
		{
			option: String,
			like: Number
		}
	]
})

mongoose.model("poll", pollSchema)