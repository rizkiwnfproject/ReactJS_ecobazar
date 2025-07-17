import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
    return (
        <MapContainer
            center={[7.2878, 80.6324]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "200px", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default LeafletMap;