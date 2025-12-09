import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model({ url }) {
    const { scene } = useGLTF(url);
    scene.scale.set(10, 10, 10);
    scene.traverse((child) => {
        if (child.isMesh && child.name === "Cube032") {
            console.log("Mesh trouvé :", child.name);
            child.material.color.set("yellow"); // change la couleur
        }
    });

    return <primitive object={scene} />;
}

export default function Boite3D() {
    const handleMeshClick = (meshName) => {
        console.log("Mesh cliqué :", meshName);
    };
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Model url="/models/clavierrr.glb"  onMeshClick={handleMeshClick}/>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
