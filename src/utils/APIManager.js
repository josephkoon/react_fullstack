import superagent from 'superagent'


export default {
	//get request for api
	get:(url, params, callback) => {
		superagent
		.get(url)
		.query(params)
		.set('Accept', 'application/json')
		.end((err,response) => {
			//request failure
			if(err){
				callback(err,null)
				return
			}
			//confirm API data success
			const confirmation = response.body.confirmation
			if(confirmation != 'success'){
				callback({message:response.body.message}, null)
				return
			}
			callback(null,response.body)
		})
	},
	post:(url, body, callback) => {
		superagent
		.post(url)
		.send(body)
		.set('Accept', 'application/json')
		.end((err,response) => {
			//request failure
			if(err){
				callback(err,null)
				return
			}
			//confirm API data success
			const confirmation = response.body.confirmation
			if(confirmation != 'success'){
				callback({message:response.body.message}, null)
				return
			}
			callback(null,response.body)
		})
	}
}



