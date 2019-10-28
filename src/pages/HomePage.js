import React, { Component } from 'react'

import PuckConnect from '../components/PuckConnect';
import GameFinder from '../components/GameFinder';


class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <GameFinder/>
                <PuckConnect/>
            </div>
        );
    }
}

export default HomePage;