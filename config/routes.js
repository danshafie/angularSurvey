var poll = require('./../server/controllers/polls.js')

module.exports = function(app){
	app.post('/createSurvey', function(req,res){
		console.log("req body in routes = ", req.body)
		console.log("req body.survey.question in routes = ", req.body.survey.question)
		poll.createSurvey(req,res)
	})

	app.get('/getAllSurveys', function(req,res){
		poll.getAllSurveys(req,res)
	})

	app.post('/goToPollPage', function(req,res){
		console.log("req.body._id in goToPollPage = ", req.body._id)
		poll.goToPollPage(req,res)
	})

	app.post('/vote', function(req,res){
		console.log("req body in vote routes = ", req.body)
		poll.vote(req,res)
	})

	app.post('/deleteSurvey', function(req,res){
		console.log("req.body deleteSurvey in routes =", req.body)
		poll.deleteSurvey(req,res)
	})
}