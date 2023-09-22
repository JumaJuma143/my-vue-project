<template>
    <div class="cont-container">
        <div class="container-side">
            <p class="container-title__cont">
                Контакти
            </p>
            <div>
                <p class="container-name__cont">Адреса:</p>
                <p class="container-name__desc">вулиця Табірна, 30-32<br>
                  Київ, 03113
                </p>
            </div>
            <div>
                <p class="container-name__cont">Графік роботи:</p>
                <p class="container-name__desc">пн.-пт.: 10:00 - 16:00<br>
                    сб.: 10:00-15:00<br>
                    нд.: вихідний
                </p>
            </div>
            <div class="container-phones__cont">
                <p class="container-name__cont">Контактна інформація:</p>
                <a href="tel:+38 (044) 339-99-01">Тел.: +38 (044) 339-99-01</a>
                <a href="tel:+38 (099) 999-99-99">Факс: +38 (099) 999-99-99</a>
                <a href="mailto:krok@krok.edu.ua">Пошта: krok@krok.edu.ua</a>
            </div>
        </div>
        <div>
            <div id="map"></div>
        </div>
    </div>
</template>
  
<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
    data() {
    return {
        contInfo: []
        };
    },
    mounted() {
      const map = L.map('map').setView([50.46148656681147, 30.428021472491746], 16);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
        let marker = L.marker([50.46148656681147, 30.428021472491746], {
        icon: L.divIcon({
            className: 'marker-icon',
            html: '<i class="fas fa-map-marker-alt"></i>'
        }),
        });
        marker.addTo(map);
    }
}
</script>
  
<style>
#map {
    height: 500px;
    width: 600px;
    margin: 30px 0;
}
.marker-icon {
  font-size: 28px;
  color: #008ba3;
}
.cont-container {
  background-color: #f2f2f2;
  margin-top: 120px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px;
}
.container-side {
  width: 30%;
  margin-top: 50px;
}
.container-title__cont {
  font-size: 26px;
  color: #00bcd4;
  font-weight: bold;
}
.container-name__cont {
  font-weight: bold;
  margin-top: 10px;
  font-size: 18px;
}
.container-name__desc {
    font-size: 18px;
    line-height: 1.5;
}
.container-phones__cont a {
  display: block;
  font-size: 18px;
  margin-top: 5px;
  color: black;
  text-decoration: none;
  transition: color 0.3s;
}
</style>