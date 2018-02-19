import React, {Component} from 'react'

class Zone extends Component {

	//zone with name, zipcode and comment number
	render(){

		let styles = {
			container:{
				padding:16,
				background:'#f9f9f9',
				marginTop:12,
				border:'1px solid #ddd'
			},
			header:{
				marginBottom:0,
				marginTop:0
			},
			title:{
				textDecoration:'none',
				color:'red'
			}
		}

		const zipCode = this.props.currentZone.zipCodes[0] 

		return(
			<div style={styles.container}>
				<h2 style={styles.header}><a style={styles.title} href='#'>{this.props.currentZone.name}</a></h2>
				<span>{zipCode}</span><br />
				<span>{this.props.currentZone.numComments} comments</span>
			</div>
		)
	}
	
}

export default Zone