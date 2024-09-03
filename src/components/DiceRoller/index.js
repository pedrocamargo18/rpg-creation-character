import React, { useRef, useState, startTransition } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

// Posições aproximadas para centralizar o texto nas faces do dado icosaédrico
const facePositions = [
  [0, 0, 2],
  [1.2, 0, 1.2],
  [2, 0, 0],
  [1.2, 0, -1.2],
  [0, 0, -2],
  [-1.2, 0, -1.2],
  [-2, 0, 0],
  [-1.2, 0, 1.2],
  [0, 1.2, 1.2],
  [0, 2, 0],
  [0, 1.2, -1.2],
  [0, 0, 0],
  [1.2, 1.2, 0],
  [1.2, -1.2, 0],
  [-1.2, 1.2, 0],
  [-1.2, -1.2, 0],
  [0.8, 0.8, 0.8],
  [0.8, -0.8, -0.8],
  [-0.8, 0.8, -0.8],
  [-0.8, -0.8, 0.8],
];

function DiceMesh({ rotation }) {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, rotation.x, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, rotation.y, 0.1);
    meshRef.current.rotation.z = THREE.MathUtils.lerp(meshRef.current.rotation.z, rotation.z, 0.1);
  });

  return (
    <group ref={meshRef}>
      <mesh>
        <icosahedronGeometry args={[2, 0]} />
        <meshStandardMaterial color="red" />
      {/* {facePositions.map((position, index) => (
        <Text
          key={index}
          fontSize={0.6}
          position={position}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {index + 1}
        </Text>
      ))} */}
      </mesh>
    </group>
  );
}

function DiceRoller() {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  const rollDice = () => {
    startTransition(() => {
      setRotation({
        x: Math.random() * Math.PI * 4,
        y: Math.random() * Math.PI * 4,
        z: Math.random() * Math.PI * 4,
      });
    });
  };

  return (
    <div className="flex flex-col items-center">
      <Canvas className="w-64 h-64">
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <DiceMesh rotation={rotation} />
      </Canvas>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={rollDice}
      >
        Roll Dice
      </button>
    </div>
  );
}

export default DiceRoller;
