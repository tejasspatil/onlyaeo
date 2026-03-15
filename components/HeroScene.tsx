'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

/* ─────────────────── NeuralBrain ─────────────────── */
function NeuralBrain() {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.05
      meshRef.current.scale.setScalar(0.97 + Math.sin(t * 0.8) * 0.03)
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.001
    }
    if (lightRef.current) {
      lightRef.current.intensity = 1.5 + Math.sin(t * 1.5) * 0.5
      lightRef.current.distance = 5 + Math.sin(t * 0.7) * 1
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.3} wireframe />
      </mesh>

      <mesh ref={innerRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshStandardMaterial color="#22D3EE" emissive="#22D3EE" emissiveIntensity={0.5} transparent opacity={0.15} />
      </mesh>

      <mesh>
        <sphereGeometry args={[2.6, 32, 32]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>

      <pointLight ref={lightRef} color="#22D3EE" intensity={2} distance={5} position={[0, 0, 0]} />
    </group>
  )
}

/* ─────────────────── LLM Orbs ─────────────────── */
const orbConfigs = [
  { name: 'ChatGPT', color: '#10A37F', radius: 3.5, speed: 0.4, offset: 0, inclination: 0.3 },
  { name: 'Claude', color: '#D97706', radius: 4.2, speed: 0.3, offset: Math.PI / 2, inclination: -0.4 },
  { name: 'Gemini', color: '#4285F4', radius: 3.8, speed: 0.35, offset: Math.PI, inclination: 0.5 },
  { name: 'DeepSeek', color: '#7C3AED', radius: 4.5, speed: 0.25, offset: Math.PI * 1.5, inclination: -0.2 },
] as const

type OrbConfig = (typeof orbConfigs)[number]

function calcOrbPos(cfg: OrbConfig, t: number): [number, number, number] {
  return [
    Math.cos(t * cfg.speed + cfg.offset) * cfg.radius,
    Math.sin(t * cfg.speed * 0.5 + cfg.offset) * cfg.radius * Math.sin(cfg.inclination),
    Math.sin(t * cfg.speed + cfg.offset) * cfg.radius * Math.cos(cfg.inclination),
  ]
}

function LLMOrb({ config }: { config: OrbConfig }) {
  const orbRef = useRef<THREE.Mesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const labelRef = useRef<THREE.Group>(null)
  const lineRef = useRef<THREE.Line>(null)

  // Build stable line geometry once
  const lineGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const [x, y, z] = calcOrbPos(config, 0)
    geo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, x, y, z], 3))
    return geo
  }, [config])

  const lineMat = useMemo(
    () => new THREE.LineBasicMaterial({ color: config.color, transparent: true, opacity: 0.4 }),
    [config.color]
  )

  const lineObj = useMemo(() => new THREE.Line(lineGeo, lineMat), [lineGeo, lineMat])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const [x, y, z] = calcOrbPos(config, t)

    if (orbRef.current) orbRef.current.position.set(x, y, z)
    if (lightRef.current) lightRef.current.position.set(x, y, z)
    if (labelRef.current) labelRef.current.position.set(x, y + 0.55, z)

    const attr = lineGeo.attributes.position as THREE.BufferAttribute
    attr.setXYZ(1, x, y, z)
    attr.needsUpdate = true
  })

  return (
    <group>
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color={config.color} emissive={config.color} emissiveIntensity={1.0} />
      </mesh>

      <pointLight ref={lightRef} color={config.color} intensity={1.5} distance={3} />

      <group ref={labelRef}>
        <Text fontSize={0.18} color="white" anchorX="center" anchorY="middle" renderOrder={1}>
          {config.name}
        </Text>
      </group>

      <primitive ref={lineRef} object={lineObj} />
    </group>
  )
}

function LLMOrbs() {
  return (
    <>
      {orbConfigs.map((cfg) => (
        <LLMOrb key={cfg.name} config={cfg} />
      ))}
    </>
  )
}

/* ─────────────────── Particle Field ─────────────────── */
function ParticleField() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const initialized = useRef(false)

  const count = 600
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const positions = useMemo(
    () =>
      Array.from({ length: count }, () => {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        const r = 5 + Math.random() * 3
        return {
          x: r * Math.sin(phi) * Math.cos(theta),
          y: r * Math.sin(phi) * Math.sin(theta),
          z: r * Math.cos(phi),
        }
      }),
    []
  )

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (meshRef.current && !initialized.current) {
      positions.forEach((pos, i) => {
        dummy.position.set(pos.x, pos.y, pos.z)
        dummy.scale.setScalar(1)
        dummy.updateMatrix()
        meshRef.current!.setMatrixAt(i, dummy.matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
      initialized.current = true
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02
      groupRef.current.rotation.x = Math.sin(t * 0.01) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <boxGeometry args={[0.015, 0.015, 0.015]} />
        <meshBasicMaterial color="#22D3EE" transparent opacity={0.6} />
      </instancedMesh>
    </group>
  )
}

/* ─────────────────── Canvas Export ─────────────────── */
export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent', width: '100%', height: '100%' }}
    >
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.1} />

      <NeuralBrain />
      <LLMOrbs />
      <ParticleField />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI * 0.75}
        minPolarAngle={Math.PI * 0.25}
      />

      <EffectComposer>
        <Bloom luminanceThreshold={0.1} intensity={1.5} mipmapBlur />
      </EffectComposer>
    </Canvas>
  )
}
