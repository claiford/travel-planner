import { MapContainer } from 'react-leaflet'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

import { useParams } from 'react-router-dom'

import travelData from '../../../travelData'
import MyMap from './MyMap';

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
        <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
            <MyMap activeTrip={activeTrip}/>
        </MapContainer>
    )
};

export default Itinerary;