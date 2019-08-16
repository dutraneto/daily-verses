import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'

class CardDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {img: '', verse: '', ref: ''},
      ]
    }
  }

  async componentDidMount() {
    const url = `https://developers.youversionapi.com/1.0/verse_of_the_day/1?version_id=1`
    const token = '1XqvcU4uQZ6-yMZ8Tv9RXoeDSCE'
    const apiHeaders = {
      headers: {
        'X-YouVersion-Developer-Token': token,
        'Accept-Language': 'pt',
        Accept: 'application/json',
      }
    }
    let response = await axios.get(url, apiHeaders)
    let data = response.data
    console.log(data)
    this.setState({
      cards: [
        {
          img: data.image.url,
          verse: data.verse.text,
          ref: data.verse.human_reference,
          attr: data.image.attribution

        }
      ]
    })

  }


  render() {
    return(
      <div className="card-deck">
        <Card img={this.state.cards[0].img}
         verse={this.state.cards[0].verse}
         reference={this.state.cards[0].ref}
         attr={this.state.cards[0].attr}
         />
        <Card img={this.state.cards[0].img}
         verse={this.state.cards[0].verse}
         reference={this.state.cards[0].ref}
         attr={this.state.cards[0].attr}
         />
        <Card img={this.state.cards[0].img}
         verse={this.state.cards[0].verse}
         reference={this.state.cards[0].ref}
         attr={this.state.cards[0].attr}
         />


      </div>
    )
  }
}

export default CardDeck
