import React from 'react'
import axios from 'axios'

export default class Kata extends React.Component {
    static initialState = {
        user:{},
        message: ''
    }

    state = Kata.initialState

    retrieveUser = async () => {
        const meta = await axios.get(
          'https://www.codewars.com/api/v1/users/Blars',
          {
            headers: {
              Authorization: process.env.CODEWARS_ACEESS_TOKEN,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );

        this.setState({
            user: meta
        })
    }

    componentDidMount(){
        try {
            this.retrieveUser()
            console.log(this.state.user)
            
        } catch (error) {
            console.log('Taco')
            this.setState({message: 'Unable to retrive Kata at this time'})
            console.error(error)
        }
    }
render() {
    const {message} = this.state
    return (
        <div>This is where I will display my trained languages
            {message && <p>{message}</p>} </div>
    )
}

}