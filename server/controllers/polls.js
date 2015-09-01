var mongoose = require("mongoose")
var Survey = mongoose.model("survey")


module.exports = (function(){
	return {
		createSurvey: function(req,res){
			var survey = new Survey({question: req.body.survey.question, createdBy: req.body.user, createdAt: Date.now(), options: [ {option: req.body.survey.optionOne, like: 0}, {option: req.body.survey.optionTwo, like: 0}, {option: req.body.survey.optionThree, like: 0}, {option: req.body.survey.optionFour, like: 0} ]})
			survey.save(function(err,result){
				if(err){
					console.log("error inserting survey = ", err)
				}else{
					res.redirect('/getAllSurveys')
				}
			})
		},
		getAllSurveys: function(req,res){
			Survey.find({}, function(err,result){
				if(err){
					console.log("error getting all surveys = ", err)
				}else{
					res.json(result)
				}
			})
		},
		goToPollPage: function(req,res){
			Survey.findOne({_id: req.body._id}, function(err,result){
				if(err){
					console.log("error getting info for specific poll = ", err)
				}else{
					res.json(result)
				}
			})
		},
		vote: function(req,res){
			Survey.update({_id: req.body.info._id, "options.option" : req.body.option.option}, {$inc : {"options.$.like" : 1}}, function(err,result){
				if(err){
					console.log("error voting on option = ", err)
				}else{
					res.json(result)
				}
			})
		},
		deleteSurvey: function(req,res){
			Survey.remove({_id: req.body._id}, function(err,result){
				if(err){
					console.log("error deleting survey = ", err)
				}else{
					res.redirect('/getAllSurveys')
				}
			})
		}
	}
})();