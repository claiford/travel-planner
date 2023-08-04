import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css'

import { useParams } from 'react-router-dom'

import travelData from '../../../travelData'

// Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'
// delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const Itinerary = () => {
    const { tripID } = useParams()
    const activeTrip = travelData.find((trip) => trip.id === tripID);


    const markers = []
    for (const day of activeTrip.days) {
        const markers_perday = day.day_locs.map((location) => {
            return (
                <Marker position={[location.loc_lat, location.loc_lon]}>
                    <Popup>
                        {location.loc_name} <br /> {location.loc_desc}
                    </Popup>
                </Marker>
            )
        })
        markers.push(markers_perday);
    }

    return (
        <MapContainer center={[1.305788067591399, 103.93170045421957]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers}
        </MapContainer>
    )
};

export default Itinerary;