import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import useWindowDimensions from '../lib/getDimensions';
import { Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const { width } = useWindowDimensions()
  const containerStyle = {
    width: width > 1152 ? 1152 : width - 80,
    height: '500px',
    margin: "0 auto"
  };

  const center = {
    lat: 54.5946451,
    lng: -5.7038145
  };
  const position = {
    lat: 54.5946451,
    lng: -5.7038145
  }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBLw18xhvh7Fv-Iesd0Pz51eCiv0LsFF80"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker
          position={position}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent