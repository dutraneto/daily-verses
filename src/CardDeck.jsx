import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'
import LazyLoad from 'react-lazyload'

class CardDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  getTheDayOfTheYear() {
    let now = new Date()
    let start = new Date(now.getFullYear(),0,0)
    let diff = now - start
    // milliseconds * sec * min * hours
    let oneDay = 1000 * 60 * 60 * 24
    let day = Math.floor(diff / oneDay)
    return day
  }

  // to get one single verse
  // async componentDidMount() {
  //   const url = `https://developers.youversionapi.com/1.0/verse_of_the_day/${this.getTheDayOfTheYear()}?version_id=1`
  //   const token = '1XqvcU4uQZ6-yMZ8Tv9RXoeDSCE'
  //   const apiHeaders = {
  //     headers: {
  //       'X-YouVersion-Developer-Token': token,
  //       'Accept-Language': 'en',
  //       Accept: 'application/json',
  //     }
  //   }
  //   let response = await axios.get(url, apiHeaders)
  //   let data = response.data
  //   console.log(data)
  //   this.setState({
  //     cards: [
  //       {
  //         img: data.image.url,
  //         verse: data.verse.text,
  //         ref: data.verse.human_reference,
  //         attr: data.image.attribution

  //       }
  //     ]
  //   })

  async componentDidMount() {
    const url = `https://developers.youversionapi.com/1.0/verse_of_the_day?version_id=1`
    const token = '1XqvcU4uQZ6-yMZ8Tv9RXoeDSCE'
    const apiHeaders = {
      headers: {
        'X-YouVersion-Developer-Token': token,
        'Accept-Language': 'en',
        Accept: 'application/json',
      }
    }
    const response = await axios.get(url, apiHeaders)
    const data = response.data
    const results = data.data.map(item => item)
    const get30First = results.slice(0, 30)
    // console.log(data)
    this.setState({
      cards: get30First
    })
  }

  render() {
    const verses = this.state.cards.map((verse, index) => {
      return (
        <Card
          key={index}
          img={verse.image.url}
          reference={verse.verse.human_reference}
          verse={verse.verse.text}
          day={verse.day}
        />
      )
    })

    return(
      <LazyLoad height={200} offset={100} once>
        <div className="card-deck">
            {verses}
        </div>
      </LazyLoad>
    )
  }
}

export default CardDeck
