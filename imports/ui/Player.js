import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
  render() {
    let itemClassNmae =`item item--position-${this.props.guy.rank}`;

    return (
      <div key={this.props.guy._id} className={itemClassNmae}>
        <div className="player">
          <div>
          <h3 className="player__name">{this.props.guy.name}</h3>
            <p className="player__stats">
              {this.props.guy.position} place - Score:{this.props.guy.score}
            </p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => {
              Players.update({_id: this.props.guy._id },{$inc:{score:1}});
            }}>+1</button>
            <button className="button button--round" onClick={() => {
              Players.update({_id: this.props.guy._id },{$inc:{score:-1}});
            }}>-1</button>
            <button className="button button--round" onClick={()=>Players.remove({_id: this.props.guy._id})}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.PropTypes = {
  guy: PropTypes.string.isRequired
};
