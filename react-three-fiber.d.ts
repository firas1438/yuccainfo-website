import { GroupProps, MeshProps } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: GroupProps
      primitive: MeshProps & { object: any }
      ambientLight: any
      directionalLight: any
    }
  }
}