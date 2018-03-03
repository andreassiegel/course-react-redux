import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
  }

  render() {
    // this.refs.map = reference to that element
    return <div ref="map" />;
  }
}

export default GoogleMap;
