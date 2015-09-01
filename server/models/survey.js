var mongoose = require("mongoose")


var surveySchema = new mongoose.Schema({
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

mongoose.model("survey", surveySchema)