import React, { Component } from 'react';
import RecipeDetails from './recipe-details';

class RecipeListing extends Component {
	constructor() {
		super();
		this.state = {
			detailsHidden: true
		}
	}

	toggleDetails(e) {
		console.log("Toggle Details runs");
		this.setState({
			detailsHidden: !this.state.detailsHidden
		});
	}

	render() {

		if (this.state.detailsHidden) {
			return (
				<li className="recipe-listing">
					<div className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}</div>
				</li>
			);
		} else {
			return (
				<li className="recipe-listing">
					<div className="detail-toggle" onClick={this.toggleDetails.bind(this)}>{this.props.name}</div>
					<RecipeDetails ingredients={this.props.ingredients} />
				</li>
			);
		}
	}
}

export default RecipeListing;
