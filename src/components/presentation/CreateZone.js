import React, { Component } from 'react'

class CreateZone extends Component {

	//data for comments
	constructor(){
		super()
		this.state = {
			zone:{
				name:'',
				zipCode:''
			}
		}
	}

	//update the zone
	updateZone(event){
		let updatedZone = Object.assign({}, this.state.zone)
		updatedZone[event.target.id] = event.target.value
		this.setState({
			zone:updatedZone
		})
	}

	//send the comment up to the Comments
	submitZone(){
		//onCreate passed down
		this.props.onCreate(this.state.zone)
	}

	render(){
		return(
			<div>
				<input id='name' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Name' /><br/>
				<input id='zipCode' onChange={this.updateZone.bind(this)} className='form-control' type='text' placeholder='Zipcode' /><br/>
				<button onClick={this.submitZone.bind(this)} className='btn btn-info'>Submit Zone</button>
			</div>
		)
	}
}


export default CreateZone