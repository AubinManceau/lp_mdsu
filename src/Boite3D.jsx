import { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Howl } from "howler";

function InteractiveModel({ modelPath, actions }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);
  const meshRefs = useRef({});
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!scene) return;

    // Échelle et rotation pour corriger l'orientation
    scene.scale.set(0.5, 0.5, 0.5);
    scene.rotation.y = Math.PI;

    scene.traverse((child) => {
      if (child.isMesh) {
        if (actions[child.name]) {
          meshRefs.current[child.name] = child;
        }
      }
    });

    setIsReady(true);
  }, [scene, actions]);

  const handleClick = (e) => {
    e.stopPropagation();
    const mesh = e.object;

    if (mesh && meshRefs.current[mesh.name] && actions[mesh.name]?.onClick) {
      actions[mesh.name].onClick(mesh);
    }
  };

  if (!isReady) return null;

  return <primitive ref={group} object={scene} onClick={handleClick} />;
}

export default function Boite3D() {
    // PLACER .MP3 ICI
    const musicList = [
        "/audio/musique.mp3",
        "/audio/toystory.mp3",
    ];
    const musicIndex = useRef(0);
  const music = useRef(
    new Howl({
      src: [musicList[musicIndex.current]],
      loop: true,
      volume: 0.5,
    })
  );

    const playMusicAtIndex = (index) => {
        music.current.stop();
        musicIndex.current = index;
        music.current = new Howl({
            src: [musicList[musicIndex.current]],
            loop: true,
            volume: 0.5,
        });
        music.current.play();
    };

    useEffect(() => {
        music.current.play();
    }, []);

  const meshActions = {
    "Cube001": {
      onClick: (mesh) => {
        console.log("Droite", mesh.name);
          const prevIndex =
              (musicIndex.current - 1 + musicList.length) % musicList.length;
          playMusicAtIndex(prevIndex);
      },
    },
    "Cube002": {
      onClick: (mesh) => {
        console.log("Gauche", mesh.name);
          const nextIndex = (musicIndex.current + 1) % musicList.length;
          playMusicAtIndex(nextIndex);
      },
    },
    "Cylinder002": {
      onClick: (mesh) => {
        console.log("volume", mesh.name);
          if (music.current.playing()) {
              music.current.pause();
          } else {
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
        <InteractiveModel modelPath="models/boitemusique.glb" actions={meshActions} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
