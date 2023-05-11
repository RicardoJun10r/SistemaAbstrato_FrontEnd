import React, { useRef, useState, useEffect } from "react";
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoieGRpZGl1eCIsImEiOiJjbGZoMHQxOW0xMjFuM3FvaG5nZXAxbTIwIn0.DrWwtg8a2y8i7-BhOdooeQ';

const mapStyle = {
    height: "300px",
    width: '500px',
    duration: 300,
    delay: 1
}

const MapBoxGlJs = ({longitude, latitude}) => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(()=>{
        if(map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        })
    })

    return(
        <div>
            <div ref={mapContainer} style={mapStyle} />
        </div>
    )
}

export default MapBoxGlJs;