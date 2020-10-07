import React, { Component } from 'react';

import './StarWars.css';
import OneStarWars from './OneStarWars';
import SavedList from './SavedList';

class StarWars extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '0',     // Used to hold value entered in the input field
      starWarsData: null,  // Used to hold data loaded from the weather API
      list: [],
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    // const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY
    const userInput = this.state.inputValue
   
    // const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    const url = `https://swapi.dev/api/people/${userInput}/`

    const res = await fetch(url)
    const charJson = await res.json()
    const respHomeWorld = await fetch(charJson.homeworld)
    const homeWorldJson = await respHomeWorld.json()
    charJson.homeworld = homeWorldJson
    this.setState({ starWarsData: charJson })
    console.log("charJson", charJson)
  }

  renderStarWarsData() {
    if (this.state.starWarsData === null) {

      return undefined
    }
    return (
      <div>
        <OneStarWars starWarsData = {this.state.starWarsData}/>   
      </div>
        
    );
  }


  addToList() {
    // this.state.list.push(this.state.starWarsData)
    const newList = [...this.state.list, this.state.starWarsData]
    this.setState({ list: newList})

  }

  renderSavedList() {
    console.log(" renderSavedList state---list", this.state.list)
    return (
      <SavedList list={this.state.list}/>
    )
  }


  

  render() {

    return (
      <div className="App">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input 
            value={this.state.inputValue} 
            onChange={e => this.setState({ inputValue: e.target.value })}
            type="number" 
            pattern="(\d{5}([\-]\d{4})?)"
            placeholder="enter number"
          />
          <button className="Submit-btn" type="submit">Submit</button>

        </form>
        <button className="Save-btn" onClick={this.addToList.bind(this)}>Save</button>

        {this.renderStarWarsData()}
        {this.renderSavedList()}
      </div>   
    );
  }
}

export default StarWars;
