var express = require('express')
var router = express.Router()
var controllers = require('../controllers')

var ZoneController = require('../controllers/ZoneController')

//get all zones
router.get('/:resource', function(req,res,next){
	var resource = req.params.resource 
	var controller = controllers[resource]

	//controller resource does not exist
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Invalid Resource Request'
		})
		return
	}

	//find resources
	controller.find(req.query, function(err,results){
			if(err){
				res.json({confirmation:'fail',message:err})
				return
			}
			res.json({confirmation:'success',results:results})	
	})
})

//get zone with id
router.get('/:resource/:id', function(req,res,next){
	var resource = req.params.resource 
	var id = req.params.id
	var controller = controllers[resource]

	//controller resource does not exist
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Invalid Resource Request'
		})
		return
	}

	//find resources
	controller.findById(id, function(err,results){
			if(err){
				res.json({confirmation:'fail',message:err})
				return
			}
			res.json({confirmation:'success',results:results})	
	})
})

//post zone
router.post('/:resource', function(req,res,next){
	var resource = req.params.resource
	var controller = controllers[resource]

	//controller resource does not exist
	if(controller == null){
		res.json({
			confirmation:'fail',
			message:'Invalid Resource Request'
		})
		return
	}

	//create resource
	controller.create(req.body,function(err,result){
			if(err){
				res.json({confirmation:'fail', message:err})
				return
			}
			res.json({confirmation:'success',result:result})	
	})

})


module.exports = router




