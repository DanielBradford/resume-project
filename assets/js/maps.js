function userInformationHTML(user) {
  return `
    <h2>${user.name}
        <span class="small-name">(@<a href="${user.html_url}" target="_blank">${user.login}</a>
        </span>
    </h2>`;
    <div class="gh-content">
        <div class="gh-avatar">
            <a href="$user.html_url}" target="_blank">
                <img src="$(user.avatar_url}" width = "80" height="80"
                alt="${user.login}" />
            </a>
        </div>
        <p>Followers: ${users.followers} - Following ${users.following} </br> Repos: ${user.public_repos}</p>
    </div>
}

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 46.619261,
      lng: -33.134766,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
