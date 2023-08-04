import { useMap } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

// Leaflet.Icon.Default.imagePath = '../node_modules/leaflet'
// delete Leaflet.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const MyMap = ({ activeTrip }) => {
    const map = useMap();

    // set OSM basemap
    const basemap = (L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }));
    map.addLayer(basemap);

    // draw markers
    const allMarkerPos = [];
    for (const day of activeTrip.days) {
        for (const location of day.day_locs) {
            allMarkerPos.push([location.loc_lat, location.loc_lon]);

            const marker = L.marker([location.loc_lat, location.loc_lon]);
            marker.bindPopup(location.loc_name);
            marker.addTo(map);
        }
    }

    // zoom to travel area
    map.flyToBounds(L.latLngBounds(allMarkerPos), {duration: 5});

    return null;
};

export default MyMap;