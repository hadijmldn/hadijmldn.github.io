import React, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function RobotScene() {
  const canvasRef = useRef(null);

  // Create a scene
  const scene = new THREE.Scene();

  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor("#000000");
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Add the renderer to the DOM
  if (canvasRef.current) {
    canvasRef.current.appendChild(renderer.domElement);
  }

  // Load the robot model
  const loader = new GLTFLoader();
  loader.load(
    "path/to/robot/robot.gltf",
    function (gltf) {
      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  return <div ref={canvasRef} />;
}

export default RobotScene;