import React, {Component} from 'react'


class Comment extends Component {

	//comment with text and username
	render(){

		let styles = {
			commentSpace:{
				marginBottom:16
			}
		}

		return (
			<div style={styles.commentSpace}>
				<h4>{this.props.currentComment.body}</h4>
				<p>{this.props.currentComment.username} at {this.props.currentComment.timestamp}</p>
				<hr />
			</div>
		)

	}
}

export default Comment