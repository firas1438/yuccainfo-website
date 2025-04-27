import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

useGLTF.preload("/robot_playground.glb")

export default function Model() {
  const group = useRef<THREE.Group>(null)
  const { animations, scene } = useGLTF("/robot_playground.glb")
  const { actions } = useAnimations(animations, scene)
  const animationTime = useRef(0)

  // Initialisation de l'animation
  useEffect(() => {
    const action = actions["Experiment"]
    if (action) {
      action.reset().play()
      action.paused = true // On empêche le mixer de gérer le temps automatiquement
      const duration = action.getClip().duration
      console.log("Durée totale de l'animation :", duration)
      if (duration < 4) {
        console.warn("Attention : la durée demandée (4s) dépasse la durée totale de l'animation")
      }
    }
  }, [actions])

  // Mise à jour du temps dans chaque frame
  useFrame((state, delta) => {
    const action = actions["Experiment"]
    if (action) {
      animationTime.current += delta
      action.time = animationTime.current % 5 // Boucle entre 0 et 4 secondes
    }
  })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}