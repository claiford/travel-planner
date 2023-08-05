import { MapContainer } from 'react-leaflet'
import { useParams } from 'react-router-dom'

import travelData from '../../../travelData'
import MyMap from './MyMap';
import Toolbox from './Toolbox'

const Itinerary = () => {
    const { tripID } = useParams()
    const activeTrip = travelData.find((trip) => trip.id === tripID);

    return (
        <>
            <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true} attributionControl={false} style={{ height: 'calc(100% - 100px)', width: '100%' }}>
                <MyMap activeTrip={activeTrip} />
            </MapContainer>
            <Toolbox activeTrip={activeTrip}/>
        </>
    )
};

export default Itinerary;