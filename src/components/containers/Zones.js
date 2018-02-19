import React, {Component} from 'react'
import { CreateZone, Zone } from '../presentation'
import { APIManager } from '../../utils'

class Zones extends Component {

	//data for zones
	constructor(){
		super()
		this.state = {
			selected: 0,
			list:[
				// {name:'Zone 1', zipCode:'10022', numComments:10}
			]
		}
	}

	//when component shows up load the zone data
	componentDidMount(){
		APIManager.get('/api/zone',null,(err,response) => {
			if(err){
				alert(err)
				return
			}
			this.setState({
				list:response.results
			})
		})
	}

	//submit the zone to API
	submitZone(zone){
		zone['zipCodes'] = zone.zipCode.split(',')

		APIManager.post('/api/zone',zone,(err,response)=>{
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


	//list of zones
	render(){
		const listItems = this.state.list.map((zone, i) => {
			return (
				<li key={i}><Zone currentZone={zone} /></li>
			)
		})

		//list of zones. with form.
		return(
			<div>
				<ol>
					{listItems}
				</ol>

				<CreateZone onCreate={this.submitZone.bind(this)} />
			</div>
		)
	}
}

export default Zones



