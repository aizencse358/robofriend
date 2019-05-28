import React,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
	constructor(){
		super();
		this.state = {
			robots:[],
			searchfield:'',
		}
	}
	onSearchChange= (event) => {
		this.setState({ searchfield: event.target.value })
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then( response => response.json())
		.then( users => this.setState({robots:users}))
	}


	render()
	{
		const {robots,searchfield} = this.state;
		const filteredrobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
		<h1>Robofriends</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<Scroll>
		<Cardlist robots={filteredrobots}/>
		</Scroll>
		</div>
	);

	}
}

export default App;