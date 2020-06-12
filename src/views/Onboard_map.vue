<template>
  <v-app>
      <Usernav/>
      <div class="map-container">
        <div id="map" ref="map"></div>
        <!-- <pre id="features" ref="features"></pre> -->
      </div>
  </v-app>
</template>
<script src="https://unpkg.com/three@0.106.2/build/three.min.js"></script>
<script src="https://unpkg.com/three@0.106.2/examples/js/loaders/GLTFLoader.js"></script>
<script>
import Usernav from '../components/Usernav.vue'
import mapboxgl from "mapbox-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { MapboxLayer } from "@deck.gl/mapbox";
import $ from 'jquery'

export default {
    data() {
        return {
            accessToken: "pk.eyJ1IjoibWl6dWtpMDQxNCIsImEiOiJjazl3dHRzNmswZDhsM21wM2Qwd3ZreDBkIn0.p1sy0sG2r5k1_YRLzD3LSg",
            mapStyle: "mapbox://styles/mizuki0414/ckahb471m01dk1in0nlamm7ku",
            mapData: "http://127.0.0.1:5500/route.geo.json",
            latitude: 35.658584,
            longitude: 139.7454316,
            zoom: 10,
            bearing: -60,
            pitch: 60,
        };
    },
    created() {
        this.map = null;
    },
    mounted() {
        // 0.mapの初期化
        this.map = new mapboxgl.Map({
            accessToken: this.accessToken,
            container: this.$refs.map,
            style: this.mapStyle ,
            center: [this.longitude, this.latitude],
            zoom: this.zoom,
            pitch: this.pitch,
            bearing: this.bearing,
        });
        this.loadLayer();
    },
    components: {
        Usernav
    },
    methods: {
        loadLayer() {
        // 1.事前の建物の準備
          const map_sub = this.map
          this.map.on('load', () => {
          let layers = this.map.getStyle().layers;
          let labelLayerId;
          for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
          }
        }
        // 2.mapをレンダリングした後に3D建造物を表示させる
        this.map.addLayer(
        {
          'id': '3d-buildings',
          'source': 'composite',
          'source-layer': 'building',
          'filter': ['==', 'extrude', 'true'],
          'type': 'fill-extrusion',
          'minzoom': 15,
          'paint': {
          'fill-extrusion-color': '#aaa',
        // 'interpolate'はzoom時のスムーズなレンダリングを可能にしている
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
          }
        },
        labelLayerId
        );
        // 3.テストコースの白線を表示させるlayerの準備
        const layer = new MapboxLayer({
            id: 'geojson-layer',
            type: GeoJsonLayer,
            data: this.mapData,
            filled: true,
            lineWidthScale: 20,
            lineWidthMinPixels: 2,
            getFillColor: d => [245, 133, 5, 0],
            getLineColor: d => [245, 245, 245],
            getLineWidth: 1,
          });
        // mapにlayerを表示
        this.map.addLayer(layer);

        // 4.このマップ上に位置情報を表示させる
        const size = 200;
        // Pulsedotの設定_GTR
        // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
        const pulsingDot = {
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),

            // レイヤーがマップに追加されたときにマップキャンバスのレンダリングコンテキストを取得する
            onAdd: function() {
              const canvas = document.createElement('canvas');
              canvas.width = this.width;
              canvas.height = this.height;
              this.context = canvas.getContext('2d');
            },
            // アイコンが使用されるすべてのフレームの前に1回呼び出される
            render: function() {
              const duration = 1000;
              const t = (performance.now() % duration) / duration;
              const radius = (size / 2) * 0.3;
              const outerRadius = (size / 2) * 0.7 * t + radius;
              const context = this.context;

              // 外円の設定
              context.clearRect(0, 0, this.width, this.height);
              context.beginPath();
              context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
              );
              context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
              context.fill();

              // 内円の設定
              context.beginPath();
              context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
              );
              context.fillStyle = 'rgba(255, 100, 100, 1)';
              context.strokeStyle = 'white';
              context.lineWidth = 2 + 4 * (1 - t);
              context.fill();
              context.stroke();

              // このimageデータをキャンバスのデータで更新する
              this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
              ).data;

              // マップを継続的に再描画し、ドットの滑らかなアニメーションを作成
              map_sub.triggerRepaint();
              // imageがアップデートされたらtrueを返す
              return true;
            }
        };
        // Pulsedotの設定_ohter
        // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
        const pulsingDot_o = {
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),

            // レイヤーがマップに追加されたときにマップキャンバスのレンダリングコンテキストを取得する
            onAdd: function() {
              const canvas = document.createElement('canvas');
              canvas.width = this.width;
              canvas.height = this.height;
              this.context = canvas.getContext('2d');
            },
            // アイコンが使用されるすべてのフレームの前に1回呼び出される
            render: function() {
              const duration = 1000;
              const t = (performance.now() % duration) / duration;
              const radius = (size / 2) * 0.3;
              const outerRadius = (size / 2) * 0.7 * t + radius;
              const context = this.context;

              // 外円の設定
              context.clearRect(0, 0, this.width, this.height);
              context.beginPath();
              context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
              );
              context.fillStyle = 'rgba(204, 204, 204,' + (1 - t) + ')';
              context.fill();

              // 内円の設定
              context.beginPath();
              context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
              );
              context.fillStyle = 'rgba(204, 204, 204, 1)';
              context.strokeStyle = 'white';
              context.lineWidth = 2 + 4 * (1 - t);
              context.fill();
              context.stroke();

              // このimageデータをキャンバスのデータで更新する
              this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
              ).data;

              // マップを継続的に再描画し、ドットの滑らかなアニメーションを作成
              map_sub.triggerRepaint();
              // imageがアップデートされたらtrueを返す
              return true;
            }
        };

          // 最後にimageをmapに追加する
          this.map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
          this.map.addImage('pulsing-dot_o', pulsingDot_o, { pixelRatio: 2 });

          // 現在地の座標を同期処理によって取得する、取れた座標をリターンする。
          function pointOnCircle(angle) {
            function coordinates() {
              let result = $.ajax({
                  type: 'GET',
                  url: 'http://127.0.0.1:5500/coordinates.json',
                  async: false
              }).responseText.split(',');
              return result;
            }
              let result = coordinates();
              // console.log(result);
              return {
                'type': 'Point',
                'coordinates': result
            };
          }

          this.map.addSource('point', {
            'type': 'geojson',
            'data': pointOnCircle(0)
          });

          this.map.addLayer({
            'id': 'point',
            'source': 'point',
            'type': 'symbol',
            'layout': {
              'icon-image': 'pulsing-dot'
            }
          });

          this.map.addLayer({
            'id': 'points1',
            'type': 'symbol',
            'source': {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [139.669681,35.666168]
                }
              }
            ]
          }
          },
            'layout': {
            'icon-image': 'pulsing-dot_o'
              }
            });

          this.map.addLayer({
            'id': 'points2',
            'type': 'symbol',
            'source': {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [139.702055,35.683155]
                }
              }
            ]
          }
          },
            'layout': {
            'icon-image': 'pulsing-dot_o'
              }
            });

          // ポイントしたlayerのgeojsonを取得する
          this.map.on('mousemove', (e) => {
            const features = this.map.queryRenderedFeatures(e.point);
            const displayProperties = [
              'type',
              'properties',
              'id',
              'layer',
              'source',
              'sourceLayer',
              'state'
            ];

            const displayFeatures = features.map(function(feat) {
              const displayFeat = {};
              displayProperties.forEach(function(prop) {
                displayFeat[prop] = feat[prop];
              });
              return displayFeat;
            });

            this.$refs.features.innerHTML = JSON.stringify(
              displayFeatures,
              null,
              2
            );
          });

          function animateMarker(timestamp) {
            // アニメーションのタイムスタンプに基づいて、データを新しい位置に更新
            // 式 `timestamp / 1000`の除数は、アニメーションの速度を制御
            map_sub.getSource('point').setData(pointOnCircle(timestamp / 10));
            // アニメーションの次のフレームを要求
            requestAnimationFrame(animateMarker);
          }
          // Start the animation.
          animateMarker(10);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.map-container {
  margin-left: 200px;
  width: 100%;
  height: 100%;
  overflow: hidden;

  #map {
  position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
  }
}

.testbox {
  background-color:black;
  margin-left: 200px;
  width: 100%;
  height: 100%;
}

#features {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20%;
  overflow: auto;
  background: rgba(255, 255, 255, 0.8);
}

#map canvas {
  cursor: crosshair;
}
</style>