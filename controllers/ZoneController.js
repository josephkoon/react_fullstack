var Zone = require('../models/Zone')

module.exports = {
	//find all zones
	find: function(params, callback){
		Zone.find(params, function(err, zones){
			if(err){
				callback(err, null)
				return
			}
			callback(null, zones)
		})
	},
	//find zone by id
	findById: function(id, callback){
		Zone.findById(id, function(err,zone){
			if(err){
				callback(err,null)
				return
			}
			callback(null,zone)
		})
	},
	//create zone
	create: function(params, callback){
		Zone.create(params, function(err,zone){
			if(err){
				callback(err,null)
				return
			}
			callback(null,zone)
		})
	},
	//update zone
	update: function(id, params, callback){
		Zone.findByIdAndUpdate(id, params,{new:true}, function(err,zone){
			if(err){
				callback(err,null)
				return
			}
			callback(null,zone)
		})
	},
	//delete zone
	delete: function(id,callback){
		Zone.findByIdandRemove(id,function(err){
			if(err){
				callback(err,null)
				return
			}
			callback(null,null)
		})
	}
}





