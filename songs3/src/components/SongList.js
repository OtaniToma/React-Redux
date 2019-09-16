import React from 'react';
import { connect } from 'react-redux';
import { selectAirport } from '../actions';

class SongList extends React.Component {
  renderList() {
    // selectSong(); //ダメ
    return this.props.airports.map((airport) => {
      return (
        <div className="item" key={airport.iata}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectAirportAirport(airport)}
            >
              Select
            </button>
          </div>
          <div className="content">{airport.iata}</div>
        </div>
      );
    })
  }
  
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { airports: state.airports };
};

export default connect(mapStateToProps, { selectAirport })(SongList);