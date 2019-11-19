import React from 'react';
import { CardList } from './components/card-list';
import { SearchBox } from './components/search';
import './App.css';
export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }

    render() {
        const {monsters, searchField} = this.state;
        const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <h1>Monster Rolodex</h1>
                <SearchBox
                    placeholder='search monster'
                    handleChange={(e) => (this.setState({searchField: e.target.value}))}
                />
                <CardList monsters={filterMonsters} />
            </div>
        );
    }
}
