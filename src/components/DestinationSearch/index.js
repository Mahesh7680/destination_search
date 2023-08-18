import {Component} from 'react'

import DestinationItem from '../DestinationItem/index'

import './index.css'

class DestinationSearch extends Component {
  state = {initialData: ''}

  searchInputText = event => {
    console.log(event.target.value)
  }

  render() {
    const {initialData} = this.state
    const {destinationsList} = this.props

    return (
      <div>
        <input type="search" onChange={this.searchInputText} />
        <DestinationItem initialData={initialData} />
      </div>
    )
  }
}
export default DestinationSearch
