import React, {Component} from 'react'
import { CreateComment, Comment } from '../presentation'
import { APIManager } from '../../utils'

class Comments extends Component {


	//data for comments
	constructor(){
		super()
		this.state = {
			list:[
				// {body:'comment 1', username:'trump', timestamp:'10:30'}
			]
		}
	}

	//when component shows up load the comment data
	componentDidMount(){
		APIManager.get('/api/comment',null,(err,response) => {
			if(err){
				alert(err)
				return
			}
			this.setState({
				list:response.results
			})
		})
	}

	//submit comment
	submitComment(comment){
		let updatedComment = Object.assign({}, comment)

		APIManager.post('/api/comment',comment,(err,response)=>{
			if(err){
				alert(err)
				return
			}

			//update the comment list
			let updatedList = Object.assign([], this.state.list)
			updatedList.push(response.result)
			this.setState({
				list: updatedList
			})
		})
	}


	//list of comments
	render(){

		let styles = {
			commentsBox: {
				padding:12,
				background:'#f9f9f9',
				border:'1px solid #ddd'
			},
			commentsList:{
				listStyleType:'none'
			}
		}

		const commentList = this.state.list.map((comment,i) => {
			return (
				<li key={i}><Comment currentComment={comment}/></li>
			)
		})

		return (
			<div>
				<h2>Comments: Zone 1</h2>
				<div style={styles.commentsBox}>
					<ul style={styles.commentsList}>
						{ commentList }
					</ul>

					<CreateComment onCreate={this.submitComment.bind(this)} />
				</div>
			</div>
		)
	}
}

export default Comments





