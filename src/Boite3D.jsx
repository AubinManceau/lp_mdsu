import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Howl } from "howler";

function InteractiveModel({ modelPath, actions }) {
  const gltf = useGLTF(modelPath);
  const meshRefs = useRef({});

  useEffect(() => {
    gltf.scene.traverse((child) => {
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
    "Cube": {
      onClick: (mesh) => {
        console.log("Pause de la musique !", mesh.name);
        music.current.pause();
      },
    },
    "Cylindre": {
      onClick: (mesh) => {
        if (!music.current.playing()) {
          console.log("Reprise de la musique !", mesh.name);
          music.current.play();
        }
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <InteractiveModel modelPath="models/test.glb" actions={meshActions} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
