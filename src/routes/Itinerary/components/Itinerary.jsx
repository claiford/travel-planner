import { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet'
import { useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

import MyMap from './MyMap';
import Toolbox from './Toolbox'

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
    const [activeDays, setActiveDays] = useState({})

    const getTrip = async () => {
        const { data, error } = await supabase
            .from('itineraries')
            .select()
            .eq('id', tripID)

        const trip = data[0]
        setActiveTrip(trip)
        setActiveDays((prevActiveDays) => {
            const newActiveDays = {}
            for (const [day_idx, day] of trip.days.entries()) {
                newActiveDays[String(day_idx + 1)] = true;
            }
            return newActiveDays
        })
    }

    const handleActiveDays = (day_num) => {
        setActiveDays((prevActiveDays) => {
            const newActiveDays = {
                ...prevActiveDays
            }
            newActiveDays[day_num] = prevActiveDays[day_num] ? false : true
            return newActiveDays
        })
    }

    useEffect(() => {
        getTrip();
    }, []);

    return (
        activeTrip.id ? (
            <>
                <MapContainer center={[0, 0]} zoom={1} scrollWheelZoom={true} attributionControl={false} style={{ height: 'calc(100% - 100px)', width: '100%' }}>
                    <MyMap activeTrip={activeTrip} activeDays={activeDays} />
                </MapContainer>
                <Toolbox activeTrip={activeTrip} activeDays={activeDays} handleActiveDays={handleActiveDays} />
            </>
        ) : (
            null
        )
    )
};

export default Itinerary;