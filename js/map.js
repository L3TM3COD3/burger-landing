var map;
function initMap() {
	var uluru = { lat: 59.93916998692174, lng: 30.309015096732622 };
	map = new google.maps.Map(document.getElementById('map'), {
		center: uluru,
		zoom: 11,
		scrollwheel: false,
		styles: [
		{
			"featureType": "poi",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "transit",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "landscape",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road.highway",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road.local",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [
				{
					"visibility": "on"
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"color": "#84afa3"
				},
				{
					"lightness": 52
				}
			]
		},
		{
			"stylers": [
				{
					"saturation": -17
				},
				{
					"gamma": 0.36
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#3f518c"
				}
			]
		}
]

	});
	
	let icons = {
		logoIcon: {
			icon: {
				url: '../img/icons/map-marker.svg',
				size: new google.maps.Size(46, 57),
				scaledsize: new google.maps.Size(-26, -52)
			}
		}
	};
	
	let features = [
		{
			position: new google.maps.LatLng(59.94554327989287, 30.38935262114668),
			type: 'logoIcon',
			contentString: 'First',
			content: 'First market'
		},
		{
			position: new google.maps.LatLng(59.91142323563909, 30.50024587065841),
			type: 'logoIcon',
			contentString: 'Second',
			content: 'Second market'
		},
		{
			position: new google.maps.LatLng(59.88693161784606, 30.319658102103713),
			type: 'logoIcon',
			contentString: 'Third',
			content: 'Third market'
		},
		{
			position: new google.maps.LatLng(59.97033574821672, 30.315194906302924),
			type: 'logoIcon',
			contentString: 'Fourth',
			content: 'Fourth market'
		}
	];
	
	var infowindow = new google.maps.InfoWindow();
	
	features.forEach(feature => {
		let  marker = new google.maps.Marker({
			position: feature.position,
			icon: icons[feature.type].icon,
			map: map,
			title: feature.contentString
		});
		
		marker.addListener('click', function() {
			infowindow.setContent(feature.content);
			infowindow.open(map, marker);
			
		});
	});
	
}

google.maps.event.addDomListener(window, 'load', initMap);