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
  },
  {
    title: '牛かつ もと村 難波分店 (Donkatsu)',
    description: 'delicious donkatsu',
    lat: 34.666829,
    lon: 135.501037
  },
  {
    title: 'Honmiyake (本みやけ)',
    description: '스테이크 덮밥',
    lat: 34.705076,
    lon: 135.498112
  },
  {
    title: 'Mizuno Okonomiyaki',
    description: 'okonomiyaki',
    lat: 34.668581,
    lon: 135.503193
  },
  {
    title: 'Ippudo Ramen',
    description: 'ramen',
    lat: 34.663390,
    lon: 135.500499
  },
  {
    title: 'Osaka Station',
    description: '',
    lat: 34.702750,
    lon: 135.495918
  },
  {
    title: 'Universal Studios',
    description: 'Amusement Park, get here by JR Yumesaki Line (also referred to as JR Sakurajima Line)',
    lat: 34.665698,
    lon: 135.432338
  },
  {
    title: 'Tempozan Ferris Wheel (天保山大観覧車)',
    description: 'Ferris Wheel',
    lat: 34.658366,
    lon: 135.430948
  },
  {
    title: 'Tenjinbashisuji 6-chome Station',
    description: 'Train station closest to our Airbnb',
    lat: 34.710919,
    lon: 135.510817
  },
  {
    title: 'Osaka Airbnb',
    description: 'Our residence',
    lat: 34.709302,
    lon: 135.511568
  },
  {
    title: 'Kyoto Airbnb',
    description: '',
    lat: 34.969704,
    lon: 135.714186
  },
  {
    title: 'Namba Station',
    description: '',
    lat: 34.662739,
    lon: 135.502608
  },
  {
    title: 'Shin-Imamiya Station',
    description: 'Train station closest to Su\'s first night Airbnb',
    lat: 34.650053,
    lon: 135.502127
  },
  {
    title: 'Su\'s Osaka Airbnb',
    description: 'Lodging for Su (first day)',
    lat: 34.646311,
    lon: 135.504251
  },
  {
    title: 'Koyoshi Sushi OSAKA (小好寿し)',
    description: '',
    lat: 34.706407,
    lon: 135.497536
  },
  {
    title: 'Ogimachi Park (扇町公園)',
    description: 'Go here by bicycle from our Airbnb',
    lat: 34.703672,
    lon: 135.509318
  },
  {
    title: 'Keitakuen Garden (慶沢園)',
    description: '',
    lat: 34.650009,
    lon: 135.511555
  },
  {
    title: 'Tennoji Zoo (天王寺動物園)',
    description: '',
    lat: 34.651114,
    lon: 135.507644
  }
];

for (let i = 0; i < markerArray.length; i++) {
  let marker = L.marker([markerArray[i].lat, markerArray[i].lon]).addTo(mymap);
  marker.bindPopup(`<span class="marker-title">${markerArray[i].title}</span>`);
  if (i === markerArray.length - 1) marker.openPopup();
}

let ourAirbnb = new L.LatLng(34.709302, 135.511568);
let nearestPark = new L.LatLng(34.703672, 135.509318);
let pointList = [ourAirbnb, nearestPark];

let firstpolyline = new L.Polyline(pointList, {
  color: 'red',
  weight: 5,
  opacity: 0.5,
  smoothFactor: 1
});
firstpolyline.addTo(mymap);
