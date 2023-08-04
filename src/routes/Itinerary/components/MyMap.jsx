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

const iconGenerator = () => {
    const myIcon = L.Icon.extend({
        options: {
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -25]
        }
    });

    const icons = {}
    icons["black"] = new myIcon({ iconUrl: require("../images/marker_black.png")})
    icons["red"] = new myIcon({ iconUrl: require("../images/marker_red.png")})
    icons["yellow"] = new myIcon({ iconUrl: require("../images/marker_yellow.png")})
    icons["blue"] = new myIcon({ iconUrl: require("../images/marker_blue.png")})
    icons["green"] = new myIcon({ iconUrl: require("../images/marker_green.png")})

    return icons
}
const icons = iconGenerator();
const iconColors = ["black", "red", "yellow", "blue", "green"];

const MyMap = ({ activeTrip }) => {
    const map = useMap();

    // set OSM basemap
    const basemap = (L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }));
    map.addLayer(basemap);

    // draw markers
    const allMarkerPos = [];
    for (const [day_idx, day] of activeTrip.days.entries()) {
        for (const location of day.day_locs) {
            allMarkerPos.push([location.loc_lat, location.loc_lon]);

            console.log("IDX", day_idx)
            const marker = L.marker([location.loc_lat, location.loc_lon], {icon: icons[iconColors[day_idx]]});

            const popup = L.popup({content:
                `<div class="popup">
                    <span>${location.loc_name}</span><br>
                </div>
                `
            })
            marker.bindPopup(popup);

            marker.addTo(map);
        }
    }

    // zoom to travel area
    map.flyToBounds(L.latLngBounds(allMarkerPos), { duration: 1 });

    return null;
};

export default MyMap;