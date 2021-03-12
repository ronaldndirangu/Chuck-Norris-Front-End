import axios from 'axios'
import React, { Component } from 'react'
import JokesCategories from './components/JokesCategories';


class RandomJokes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             jokes: []
        }
    }

    componentDidMount() {
        axios
        .get(`https://api.chucknorris.io/jokes/random?category=${this.props.category}`)
        .then(response => {
            console.log(response)
            this.setState({jokes: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <div>
                <JokesCategories />
            </div>
        )
    }
}

export default RandomJokes
