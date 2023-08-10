import { useState } from 'react';

import { useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

import Toolbox from './Toolbox';

// Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'
// delete Leaflet.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const iconGenerator = () => {
    const myIcon = L.Icon.extend({
        options: {
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -25]
        }
    });

    const icons = {}
    icons["black"] = new myIcon({ iconUrl: require("../images/marker_black.png") })
    icons["red"] = new myIcon({ iconUrl: require("../images/marker_red.png") })
    icons["yellow"] = new myIcon({ iconUrl: require("../images/marker_yellow.png") })
    icons["blue"] = new myIcon({ iconUrl: require("../images/marker_blue.png") })
    icons["green"] = new myIcon({ iconUrl: require("../images/marker_green.png") })

    return icons
}
const icons = iconGenerator();
const iconColors = ["black", "red", "yellow", "blue", "green"];

const MyMap = ({ activeTrip }) => {
    const [firstLoad, setFirstLoad] = useState(true);
    const [tripMarkers, setTripMarkers] = useState({ edit: false, markers: {} })
    const map = useMap();

    const handleActiveDays = (day_num) => {
        map.hasLayer(tripMarkers.markers[day_num]) ? tripMarkers.markers[day_num].remove() : tripMarkers.markers[day_num].addTo(map)
    }

    const handleZoom = (day_num) => {
        if (day_num === "reset") {
            map.flyToBounds(findBounds(tripMarkers.markers), { duration: 1 });
        } else {
            map.flyToBounds(findBounds({_: tripMarkers.markers[day_num]}));
        }
    }

    const constructMarkers = () => {
        const allMarkers = {}
        for (const [day_idx, day] of activeTrip.days.entries()) {
            const markersPerDay = L.layerGroup()
            for (const location of day.day_locs) {
                const marker = L.marker([location.loc_lat, location.loc_lon], { icon: icons[iconColors[day_idx]] });
                const popup = L.popup({
                    content:
                        `<div class="popup">
                        <span>${location.loc_name}</span><br>
                    </div>
                    `
                })
                marker.bindPopup(popup);

                markersPerDay.addLayer(marker);
            }
            allMarkers[String(day_idx + 1)] = markersPerDay;

            // allMarkers structure
            // { [day_num] : layerGroup([markers])}
        }
        return allMarkers;
    }

    const findBounds = (markers) => {
        const bounds = L.latLngBounds()
        Object.values(markers).forEach((markerGroup) => {
            markerGroup.eachLayer((marker) => {
                bounds.extend(marker.getLatLng());
            })
        })
        return bounds.pad(0.1);
    }

    if (firstLoad) {
        // set OSM basemap
        map.addLayer(L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }));
        // add attribution
        L.control.attribution({ position: "topright" }).addTo(map);

        // construct markers
        setTripMarkers({ edit: false, markers: constructMarkers() });
        
        setFirstLoad(false);
    } else {
        Object.values(tripMarkers.markers).forEach((markerGroup) => {
            markerGroup.addTo(map);
        })
        handleZoom("reset")
    }

    return (
        <Toolbox activeTrip={activeTrip} handleActiveDays={handleActiveDays} handleZoom={handleZoom} />
    );
};

export default MyMap;