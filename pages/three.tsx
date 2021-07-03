import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import * as THREE from 'three'

export default function Three() {
  if (process.browser) {
    // サイズを指定
    const width = 960;
    const height = 540;

    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#myCanvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    // 箱を作成
    const geometry = new THREE.BoxGeometry(400, 400, 400);
    const material = new THREE.MeshNormalMaterial();
    const box = new THREE.Mesh(geometry, material);
    scene.add(box);

    tick();

    // 毎フレーム時に実行されるループイベントです
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング

      requestAnimationFrame(tick);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>tossy_yukky vercel blog</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <canvas id="myCanvas"></canvas>
      </main>
    </div>
  )
}