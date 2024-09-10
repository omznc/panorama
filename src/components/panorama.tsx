'use client';

import { MapContainer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

export const Panorama = () => {
	return (
		<MapContainer
			className="h-dvh w-full"
			center={[0, 0]}
			zoom={0}
			maxZoom={0}
			minZoom={0}
			style={{ height: '100dvh', width: '100%' }}
			crs={L.CRS.Simple}
			zoomControl={false}
		>
			<CustomTileLayer />
		</MapContainer>
	);
};

const MIN_X = 0;
const MAX_X = 152;
const MIN_Y = 0;
const MAX_Y = 10;

const CustomTileLayer = () => {
	const map = useMap();

	useEffect(() => {
		if (map) {
			const layer = L.tileLayer("/tile_0_{x}_{y}.png", {
				tileSize: 500,
				noWrap: true,
				detectRetina: true,
			});

			layer.getTileUrl = function (coords) {
				if (coords.x < MIN_X || coords.x > MAX_X || coords.y < MIN_Y || coords.y > MAX_Y) {
					return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
				}
				return L.TileLayer.prototype.getTileUrl.call(this, coords);
			};

			layer.addTo(map);

			return () => {
				if (layer) {
					map.removeLayer(layer);
				}
			};
		}
	}, [map]);

	return null;
};
