import React, { Component } from 'react'


class PlayerCard extends Component {
    constructor(props) {
        super(props);
        console.log('playercard prop:', this.props);
        this.state = {player:this.props.player};
    }

    render() {
        console.log('player: ', this.state.player);
        if(this.state.player.name){
            return (
                <div>
                    <p>{this.state.player.name}</p>
                </div>
            );
        }
        if(this.state.player.is_me){
            return (
                <div>
                    <input type="text" placeholder="choose nickname" onChange={this.nameUpdated.bind(this)}/>
                    <button onClick={this.nameSelected.bind(this)}>confirm</button>
                </div>
            )
        }
        return (
            <div>
                <p>choosing name...</p>
            </div>
        )
    }

    nameUpdated(event) {
        console.log('name typed', event.target.value)
        this.my_name = event.target.value;
    }

    nameSelected(event) {
        console.log('confirm name', this.my_name);
        this.setState({player:{id:this.state.player.id, name:this.my_name, is_me:true}})
    }
}

export default PlayerCard;