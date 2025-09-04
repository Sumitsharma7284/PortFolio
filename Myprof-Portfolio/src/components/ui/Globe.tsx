import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

const Globe = () => {
  const globeRef = useRef<Mesh>(null!);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

      <mesh ref={globeRef} rotation={[0.4, 0.6, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="royalblue"
          roughness={0.4}
          metalness={0.6}
          emissive="purple"
          emissiveIntensity={0.2}
        />
      </mesh>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  );
};

export default Globe;
