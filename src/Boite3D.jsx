import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Howl } from "howler";

function InteractiveModel({ modelPath, actions }) {
  const gltf = useGLTF(modelPath);
  const meshRefs = useRef({});

  useEffect(() => {
    gltf.scene.scale.set(0.5, 0.5, 0.5);
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Mesh loaded:", child.name);
      }
      if (child.isMesh && actions[child.name]) {
        meshRefs.current[child.name] = child;
      }
    });
  }, [gltf, actions]);

  return (
    <primitive
      object={gltf.scene}
      onClick={(e) => {
        const mesh = e.object;
        if (meshRefs.current[mesh.name] && actions[mesh.name].onClick) {
          actions[mesh.name].onClick(mesh);
        }
      }}
    />
  );
}

export default function Boite3D() {
  const music = useRef(
    new Howl({
      src: ["/audio/musique.mp3"],
      loop: true,
      volume: 0.5,
    })
  );

  const meshActions = {
    "Cube001": {
      onClick: (mesh) => {
        console.log("Droite", mesh.name);
      },
    },
    "Cube002": {
      onClick: (mesh) => {
        console.log("Gauche", mesh.name);
      },
    },
    "Cylinder002": {
      onClick: (mesh) => {
        console.log("volume", mesh.name);
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <InteractiveModel modelPath="models/boitemusique.glb" actions={meshActions} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
