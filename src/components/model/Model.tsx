// @ts-nocheck


import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/ferrari/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>

              <group name="body_0" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_5"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_7"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_7.geometry}
                  material={materials.White_interior}
                />
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.metal}
                />
                <mesh
                  name="Object_9"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Orange_lights}
                />
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Blackest_black}
                />
              </group>

              <group name="bottom_1" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="bottom_light_2" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Orange_lights}
                />
                <mesh
                  name="Object_15"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_15.geometry}
                  material={materials.Lights}
                />
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="bumper_3" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_19"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_19.geometry}
                  material={materials.Blackest_black}
                />
              </group>

              <group name="chassis_front_4" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_21"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="chassis_rear_5" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="hood_6" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Yellow}
                />
              </group>

              <group name="interior_7" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.White_interior}
                />
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials.mirror}
                />
              </group>

              <group name="interior_details_8" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials.White_interior}
                />
              </group>

              <group name="left_door_9" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials.mirror}
                />
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials.White_interior}
                />
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="left_tire_back_10" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.Tires}
                />
              </group>

              <group name="left_tire_front_11" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials.Tires}
                />
              </group>

              <group name="left_wheel_back_12" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials.rims}
                />
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="left_wheel_front_13" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.rims}
                />
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials.metal}
                />
              </group>
              
              <group name="license_plate_holder_14" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.Black_main}
                />
              </group>
              
              <group
                name="pop_up_lighs_15"
                position={[0.523, 0.37, 1.404]}
                rotation={[1.571, 0, 0]}>
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.Lights}
                />
              </group>

              <group name="rear_bottom_16" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="rear_bumper_17" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="rear_details_18" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.Tires}
                />
              </group>

              <group name="rear_grid_19" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="rear_hood_20" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials.Glass}
                />
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_71"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials.Red_light}
                />
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="rear_light_21" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_74"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_74.geometry}
                  material={materials.Orange_lights}
                />
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.Red_light}
                />
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials.Lights}
                />
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="right_door_22" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.mirror}
                />
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials.White_interior}
                />
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="right_tire_back_23" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials.Tires}
                />
              </group>

              <group name="right_tire_front_24" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.Tires}
                />
              </group>

              <group name="right_wheel_back_25" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.rims}
                />
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="right_wheel_front_26" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.rims}
                />
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.metal}
                />
              </group>

              <group name="right_window_27" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.Glass}
                />
              </group>

              <group name="wheel_28" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.Yellow}
                />
              </group>

              <group name="whipers_29" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.Black_main}
                />
              </group>

              <group name="windshield_30" rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.Black_main}
                />
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials.Glass}
                />
              </group>

            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ferrari/scene.gltf')