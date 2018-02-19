import React, {Component} from 'react'
import { APIManager } from '../../utils'

class CreateComment extends Component {

	//data for comments
	constructor(){
		super()
		this.state = {
			comment:{
				username:'',
				body:''
			}
		}
	}

	//update the comment
	updateComment(event){
		let updatedComment = Object.assign({}, this.state.comment)
		updatedComment[event.target.id] = event.target.value
		this.setState({
			comment:updatedComment
		})
	}

	//send the comment up to the Comments
	submitComment(){
		//onCreate passed down
		this.props.onCreate(this.state.comment)
	}


	render(){
		return(
			<div>
				<input id='username' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Username' /><br/>
				<input id='body' onChange={this.updateComment.bind(this)} className='form-control' type='text' placeholder='Body' /><br/>
				<button onClick={this.submitComment.bind(this)} className='btn btn-info'>Submit Comment</button>
			</div>
		)
	}
}

export default CreateComment




