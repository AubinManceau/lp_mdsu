import { useEffect, useRef, useState } from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Howl } from "howler";

function InteractiveModel({ modelPath, actions, meshRefs }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!scene) return;

    // Échelle et rotation pour corriger l'orientation
    scene.scale.set(1, 1, 1);
    scene.rotation.y = Math.PI;

    scene.traverse((child) => {
      if (child.isMesh) {
          // Gretsch_G9500001 c'est la guitare, à renommer sur blender
          if (child.name === "Alfaia_-_candomblé_drum_-_Wooden_Drum") {
              meshRefs.current.drum = child;
              child.visible = false;
          }

          if (child.name === "Gretsch_G9500001") {
              meshRefs.current.guitar = child;
              child.visible = false;
          }
        if (actions[child.name]) {
          meshRefs.current[child.name] = child;
        }
      }
    });

    setIsReady(true);
  }, [scene, actions]);

    useFrame((state, delta) => {
        if (!isReady) return;

        const plateau = scene.getObjectByName("Cylinder001");// nom exact du plateau dans ton GLTF
        if (plateau) {
            const speed = 2 * Math.PI / 10; // 1 tour complet = 10 secondes
            plateau.rotation.y += speed * delta;
        }
    });

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
    const meshRefs = useRef({});
    const showInstruments = () => {
        const drum = meshRefs.current.drum;
        const guitar = meshRefs.current.guitar;

        if (drum && !drum.visible) drum.visible = true;
        if (guitar && !guitar.visible) guitar.visible = true;
    };

    // PLACER .MP3 ICI
    const musicList = [
        "/audio/toystoryfini.MP3",
        "/audio/leroilion.MP3",
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

  const meshActions = {
    "Cube001": {
      onClick: (mesh) => {
          showInstruments();
          const prevIndex =
              (musicIndex.current - 1 + musicList.length) % musicList.length;
          playMusicAtIndex(prevIndex);
      },
    },
    "Cube002": {
      onClick: (mesh) => {
          showInstruments();
          const nextIndex = (musicIndex.current + 1) % musicList.length;
          playMusicAtIndex(nextIndex);
      },
    },
    "Cylinder002": {
      onClick: (mesh) => {
          showInstruments();
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
      <Canvas camera={{ position: [0, 4, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <InteractiveModel modelPath="models/boitemusique.glb" actions={meshActions} meshRefs={meshRefs} />
        <OrbitControls target={[0, 1.2, 0]}/>
      </Canvas>
    </div>
  );
}
