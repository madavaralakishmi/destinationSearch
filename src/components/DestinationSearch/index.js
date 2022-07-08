// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeText = event => {
    this.setState({searchInput: event.target.value})
    // console.log(event.target.value)
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="dg-color">
        <h1>Destination Search</h1>
        <div className="inputContainer">
          <input
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeText}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="img2"
            alt="search icon"
          />
        </div>
        <ul className="unorderd">
          {searchResult.map(eachItem => (
            <DestinationItem destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
