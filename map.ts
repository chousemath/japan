let mymap = L.map('mapid').setView([34.6937378, 135.50216509999996], 13);
// pk.eyJ1Ijoiam9jaG9pMDcwNyIsImEiOiJjajczMWZrcTkwNHo2MzNvNGIzOHI3MW85In0.GSHlVF_HltDmEvomI2m_CA
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1Ijoiam9jaG9pMDcwNyIsImEiOiJjajczMWZrcTkwNHo2MzNvNGIzOHI3MW85In0.GSHlVF_HltDmEvomI2m_CA'
}).addTo(mymap);

let markerArray = [
  {
    title: 'Port of Osaka',
    description: 'Formerly called the Naniwazu Port, the Port of Osaka was the ancient entry point for visitors from other parts of Asia.',
    lat: 34.61405945,
    lon: 135.4403915,
  },
  {
    title: 'Shitennō-ji (四天王寺)',
    description: 'Possibly the first Buddhist temple in Japan.',
    lat: 34.6539,
    lon: 135.51645
  }
];

for (let i = 0; i < markerArray.length; i++) {
  let marker = L.marker([markerArray[i].lat, markerArray[i].lon]).addTo(mymap);
  marker.bindPopup(`<span class="marker-title">${markerArray[i].title}</span>`);
  if (i === markerArray.length - 1) marker.openPopup();
}
