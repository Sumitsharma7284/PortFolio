"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import ThreeGlobe from "three-globe";
import countries from "../../data/globe.json"; // GeoJSON data for hex polygons

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

const cameraZ = 300;
const RING_PROPAGATION_SPEED = 3;


function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      groupRef.current.add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const mat = globeRef.current.globeMaterial() as any;
    mat.color = new THREE.Color(globeConfig.globeColor);
    mat.emissive = new THREE.Color(globeConfig.emissive);
    mat.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    mat.shininess = globeConfig.shininess || 0.9;
  }, [isInitialized, globeConfig]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    // Hex polygons
    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    // Arcs and Points
    globeRef.current
      .arcsData(data)
      .arcStartLat((d: Position) => d.startLat)
      .arcStartLng((d: Position) => d.startLng)
      .arcEndLat((d: Position) => d.endLat)
      .arcEndLng((d: Position) => d.endLng)
      .arcColor((d: Position) => d.color)
      .arcAltitude((d: Position) => d.arcAlt)
      .arcDashLength(defaultProps.arcLength)
      .arcDashGap(15)
      .arcDashAnimateTime(defaultProps.arcTime)
      .arcDashInitialGap((d: Position) => d.order);

    type Point = { lat: number; lng: number; color: string };

    const points: Point[] = [
      ...new Set(
        data.flatMap((d) => [
          { lat: d.startLat, lng: d.startLng, color: d.color },
          { lat: d.endLat, lng: d.endLng, color: d.color },
        ])
      ),
    ];

    globeRef.current
      .pointsData(points)
      .pointColor((d: { lat: number; lng: number; color: string }) => d.color)
      .pointAltitude(0)
      .pointRadius(1.8)
      .pointsMerge(true);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
      );
  }, [
    isInitialized,
    data,
    defaultProps.showAtmosphere,
    defaultProps.atmosphereColor,
    defaultProps.atmosphereAltitude,
    defaultProps.polygonColor,
    defaultProps.arcLength,
    defaultProps.arcTime,
    defaultProps.rings,
    defaultProps.maxRings,
  ]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      const ringsData = genRandomNumbers(
        0,
        data.length,
        Math.floor(data.length * 0.7)
      ).map((i) => ({
        lat: data[i].startLat,
        lng: data[i].startLng,
        color: data[i].color,
      }));
      globeRef.current!.ringsData(ringsData);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 0);
  }, [gl, size]);

  return null;
}

export function World({ globeConfig, data }: WorldProps) {
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 400, 2000);

  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 50 }}>
      <WebGLRendererConfig />
      <ambientLight
        color={globeConfig.ambientLight || "#ffffff"}
        intensity={0.6}
      />
      <directionalLight
        color={globeConfig.directionalLeftLight || "#ffffff"}
        position={[-400, 100, 400]}
      />
      <directionalLight
        color={globeConfig.directionalTopLight || "#ffffff"}
        position={[-200, 500, 200]}
      />
      <pointLight
        color={globeConfig.pointLight || "#ffffff"}
        position={[-200, 500, 200]}
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate={globeConfig.autoRotate ?? true}
        autoRotateSpeed={globeConfig.autoRotateSpeed ?? 1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
