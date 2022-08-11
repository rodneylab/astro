import markerIconRetinaURL from 'leaflet/dist/images/marker-icon-2x.png';
import markerIconURL from 'leaflet/dist/images/marker-icon.png';
import markerShadowURL from 'leaflet/dist/images/marker-shadow.png';

export function setMap(
	mapElement: HTMLElement,
	{
		latitude,
		longitude,
		zoom,
		markerMarkup = '',
	}: { latitude: number; longitude: number; zoom: number; markerMarkup?: string },
) {
	(async () => {
		const {
			icon: leafletIcon,
			map: leafletMap,
			marker: leafletMarker,
			tileLayer,
		} = await import('leaflet');

		const markerIcon = leafletIcon({
			iconSize: [25, 41],
			iconAnchor: [10, 41],
			popupAnchor: [2, -40],
			iconUrl: markerIconURL,
			iconRetinaUrl: markerIconRetinaURL,
			shadowUrl: markerShadowURL,
		});

		const map = leafletMap(mapElement).setView([latitude, longitude], zoom);
		tileLayer(
			'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}{r}?access_token={accessToken}',
			{
				attribution:
					'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				maxZoom: 19,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
				accessToken: import.meta.env.PUBLIC_MAPBOX_ACCESS_TOKEN,
				detectRetina: true,
			},
		).addTo(map);

		if (markerMarkup !== '') {
			leafletMarker([latitude, longitude], { icon: markerIcon }).bindPopup(markerMarkup).addTo(map);
		} else {
			leafletMarker([latitude, longitude], { icon: markerIcon }).addTo(map);
		}
	})();
}
