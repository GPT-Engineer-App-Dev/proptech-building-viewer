import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, Text } from '@chakra-ui/react';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaMapPin } from 'react-icons/fa';

const osloCenter = [59.9139, 10.7522];
const buildingData = [
  { id: 1, position: [59.9139, 10.7522], sensorData: 'Temperature: 20°C, Humidity: 30%' },
  { id: 2, position: [59.9149, 10.7522], sensorData: 'Temperature: 21°C, Humidity: 35%' },
  // Add 8 more buildings with dummy data
];

const pinIcon = new Icon({
  iconUrl: 'path-to-pin-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Index = () => {
  return (
    <MapContainer center={osloCenter} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {buildingData.map((building) => (
        <Marker key={building.id} position={building.position} icon={pinIcon}>
          <Popup>
            <Box>
              <Text fontWeight="bold">Building {building.id}</Text>
              <Text>{building.sensorData}</Text>
            </Box>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Index;