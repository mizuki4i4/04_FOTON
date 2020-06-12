<template>
    <div class="wrapper">
        <canvas id="canvas" ref="canvas"></canvas>
        <div class="summary">
          <ul class="summary_list_wrap">
            <li class="summary_list">
              <p class="summary_title">Aged ECUs</p>
              <p class="summary_content">1</p>
            </li>
            <li class="summary_list">
              <p class="summary_title">Car State</p>
              <p class="summary_content">AutoDrive</p>
            </li>
            <li class="summary_list">
              <p class="summary_title">SW Updates</p>
              <p class="summary_content">7</p>
            </li>
            <li class="summary_list">
              <p class="summary_title">SW Vulnerabilities</p>
              <p class="summary_content">High : 3</p>
              <!-- <p class="summary_content">SWvulnerability</p> -->
            </li>
          </ul>
        </div>
        <div class="times" v-if="year != undefined" v-cloak>
            <p class="time">{{ Hour }}:{{ Min }}:{{ Sec }}</p>
            <p class="ymd">{{ year }}/{{ month }}/{{ Date1 }} UTC+9</p>
            <div class="battery">
              <ul class="battery_info">
                <li class="battery_class">
                  <v-icon v-icon color="#7eb26d">mdi-battery-charging-high</v-icon>
                </li>
                <li class="battery_class">
                  <p class="battery_percent">98%</p>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>
<script>
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import $ from 'jquery'
import SWChart from '../components/SWChart.vue'

export default {
  name: "RotateBox",
  data() {
    // sceneの定義
    const scene = new THREE.Scene();
    // rendererはnull
    const renderer = null;
    // cameraの設定
    const camera = new THREE.PerspectiveCamera(50, 600 / 400, 1, 10000);
    // lightの設定
    const light = new THREE.DirectionalLight(0xffffff, 2);
    // geoの設定
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // Materialの設定
    const material = new THREE.MeshNormalMaterial();
    // このgeo,materialを引数にしてインスタンスを生成
    const cube = new THREE.Mesh(geometry, material);
    // GLTFloderの追加
    const loader = new GLTFLoader();
    // objURL
    const objURL = "http://127.0.0.1:5500/nissan_gtr_2018/scene.gltf";
    // 時刻
    let message = (new Date()).toLocaleString()
    // 以下の項目をreturn
    return { scene, renderer, camera, light, geometry, material, cube , loader, objURL, message,
      intervalId: undefined,
      year: undefined,
      month: undefined,
      Date1: undefined,
      Hour: undefined,
      Min: undefined,
      Sec: undefined,
      Day: undefined
    };
  },
  mounted() {
    // ①所有車の追加
    // canvasの取得
    const $canvas = document.getElementById("canvas");
    var w = $('.wrapper').width();
    var h = $('.wrapper').height();
    $('#canvas').attr('width', w);
    $('#canvas').attr('height', h);
    // rendererインスタンスを生成
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    });
    // orbitcontrols
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.camera.position.set(1500, 300, 0);
    this.light.position.set(100, 100, 100);
    // this.scene.add(this.cube);
    this.scene.add(this.light);
    let objmodel;
    let gltfscene = this.scene;
    // loderの追加
    this.loader.load(
    this.objURL,
    function(gltf) {
      objmodel = gltf.scene;
      // model.name = "model_with_cloth";
      objmodel.scale.set(1.0, 1.0, 1.0);
      objmodel.position.set(0, 0, 0);
      gltfscene.add(gltf.scene);
    },
    function(error) {
      console.log("An error happened");
      console.log(error);
    });
    this.renderer.gammaOutput = true;
    this.renderer.gammaFactor = 5.0;
    controls.update();
    this.animate()
    this.setTime();

  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);
      this.renderer.render(this.scene, this.camera);
    },
    setTime() {
        this.intervalId = setInterval(() => {
      var now = new Date;
      this.year = now.getFullYear() + 10;
      this.month = now.getMonth() + 1;
      this.Date1 = now.getDate();
      this.Hour = now.getHours();
      this.Min = now.getMinutes();
      this.Sec = now.getSeconds();
      this.Day = now.getDay();
      }, 100)
    }
  },
  components: {
      SWChart
  }
};

</script>
<style>
    .wrapper {
      width: 100%;
      height: 130%;
    }
    canvas {
        margin-left:0px;
        margin-right: 0px;
    }

    .summary {
      position: absolute;
      left: 50%;
      top: 10%;
      width: 800px;
      height: 150px;
      transform: translateY(-50%) translateX(-50%);
    }

    .summary_list_wrap {
      display: flex;
    }

    .summary_list{
      text-align: center;
      background-color: #171819;
      margin-left: 10px;
      width: 300px;
      height: 150px;
      list-style: none;
    }

    .summary_title {
      color: #d8d9da !important;
      font-size: 13px !important;
      margin-top: 3px !important;
    }

    .summary_content {
      color: #d8d9da !important;
      font-size: 35px !important;
      margin-top: 30px !important;
    }

    .times {
      position: absolute;
      left: 50%;
      top: 62%;
      width: 800px;
      height: 100px;
      transform: translateY(-50%) translateX(-50%);
      text-align: center;
    }
    .time {
      margin-left: 10px !important;
      color: #d8d9da;
      font-size: 55px;
    }
    .ymd {
      margin-top: 0px !important;
      margin-left: 10px !important;
      color: #d8d9da;
      font-size: 20px;
    }

    .battery {
      margin-bottom: 10px !important;
      margin-left: 10px !important;
    }

    .battery_info {
      display: flex;
      position: absolute;
      left: 43%;
    }

    .battery_class {
      list-style: none;
      margin-left: 5px;
    }

    .battery_percent {
      color: #7eb26d;
    }
</style>