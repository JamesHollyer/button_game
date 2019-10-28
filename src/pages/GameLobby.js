import React, { Component } from 'react'

import PlayerCard from '../components/PlayerCard';


class GameLobby extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {game:{players:[{name:'', id:1, is_me:true}, {name:'catie', id:2, is_me:false}, {name:'', id:3, is_me:false}]}};
    }
    render() {
        return (
            <div>
                <h1>Game Lobby</h1>
                <h3>Players</h3>
                {this.state.game.players.map((value, index) => {
                    return <PlayerCard player={value} key={value.id}/>
                })}
                <button onClick={this.StartGame.bind(this)}>Start Game</button>
            </div>
        );
    }

    StartGame() {
        console.log('start game');
    }
}

export default GameLobby;