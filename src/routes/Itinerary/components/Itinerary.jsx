import { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

import MyMap from './MyMap';

///// API CONFIGS /////
const supabaseUrl = 'https://yjysjahnpuhgzefdvkta.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
///// API CONFIGS /////

const Itinerary = () => {
    const { tripID } = useParams()
    const [activeTrip, setActiveTrip] = useState({
        id: null,
        created_at: "",
        name: "",
        destination: "",
        start_date: "",
        end_date: "",
        collaborators: "",
        days: ""
    })

    const getTrip = async () => {
        const { data, error } = await supabase
            .from('itineraries')
            .select()
            .eq('id', tripID)

        const trip = data[0]
        setActiveTrip(trip)
    }

    useEffect(() => {
        getTrip();
    }, []);

    return (
        activeTrip.id ? (
            <>
                <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true} attributionControl={false} style={{ height: '100%', width: '100%' }}>
                    <MyMap activeTrip={activeTrip} />
                    {/* <Toolbox activeTrip={activeTrip} activeDays={mapStatus.activeDays} handleActiveDays={handleActiveDays} handleZoom={handleZoom} /> */}
                </MapContainer>
                
            </>
        ) : (
            null
        )
    )
};

export default Itinerary;