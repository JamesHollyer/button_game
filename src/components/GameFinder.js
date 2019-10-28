import React, { Component } from 'react'


class GameFinder extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="game code"/>
                <button id="btnFindGame" onClick={this.findGame.bind(this)}>find</button>
            </div>
        );
    }

    findGame(event) {
        console.log('finding game', event);
    }
}

export default GameFinder;