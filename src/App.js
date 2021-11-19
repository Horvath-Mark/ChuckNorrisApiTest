import React, { Component } from 'react';
import './App.css';
const CATEGORIES_URL = 'https://api.chucknorris.io/jokes/categories';
const GET_JOKE_BY_CATEGORY_URL = 'https://api.chucknorris.io/jokes/random?category=';
const CHUCK_NORRIS_API_IMAGE_URL = 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      jokes: {},
    }
  }

  componentDidMount(){
    fetch(CATEGORIES_URL)
    .then((response)=>response.json())
    .then((data)=>this.setState({categories: data}))
  }

  categoryChange=(categoryChangeEvent)=>{
    const jokecategory= categoryChangeEvent.target.value;
    const url= GET_JOKE_BY_CATEGORY_URL + jokecategory;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>this.setState({jokes: data}))
  }

  render() {
    return(
    <div className="container">
      <div className="row">
      <h1 className="title">Chuck Norris Jokes by Chuck Norris API</h1>
        <div className="col-6">
          <img src={CHUCK_NORRIS_API_IMAGE_URL} alt="Chuck Norris API"/>
        </div>
        <div className="col-6">
         <h2>Categories</h2>

         <select onChange={this.categoryChange}>
           <option>SELECT CATEGORY</option>
           {this.state.categories.map((category) => (
            <option key={category}>{category}</option>
            ))}
         </select>

        </div>
      </div>

      <h2>A random joke in the selected category:</h2>
      <div>
           <h5>{this.state.jokes.value}</h5>
      </div>
    </div>
    )
  }
}

export default App;
