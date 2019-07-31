import React from 'react'
import axios from 'axios'

export default class Kata extends React.Component {
    static initialState = {
        user: {
            honor: 0
        }
    }

    state = Kata.initialState
    retrieveUser = async () => {
        const meta = await axios.get('https://www.codewars.com/api/v1/users/Blars')

        this.setState({
            user: meta
        })
    }

    componentDidMount(){
        this.retrieveUser()
    }
render() {
    return (
        <div>This is where I will display my trained languages {this.state.user.honor}</div>
    )
}

}