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
  const musicRef = useRef(null);

  useEffect(() => {
    musicRef.current = new Howl({
      src: ["/audio/musique.mp3"],
      loop: true,
      volume: 0.5,
    });

    return () => {
      if (musicRef.current) {
        musicRef.current.unload();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!musicRef.current) return;
    
    if (musicRef.current.playing()) {
      musicRef.current.pause();
    } else {
      musicRef.current.play();
    }
  };

  const meshActions = {
    Cube001: {
      onClick: (mesh) => {
        console.log("Clic sur Droite:", mesh.name);
      },
    },
    Cube002: {
      onClick: (mesh) => {
        console.log("Clic sur Gauche:", mesh.name);
      },
    },
    Cylinder002: {
      onClick: (mesh) => {
        console.log("Clic sur Volume:", mesh.name);
        toggleMusic();
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Canvas 
        camera={{ position: [0, 1, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} />
        
        <InteractiveModel 
          modelPath="/models/boitemusique.glb" 
          actions={meshActions} 
        />
        
        <OrbitControls 
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}