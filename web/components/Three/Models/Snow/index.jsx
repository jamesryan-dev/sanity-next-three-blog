/* eslint-disable react/jsx-props-no-spreading */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: artfromheath (https://sketchfab.com/artfromheath)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/snowy-mountain-terrain-9fa3c56fd32746bcb0e06cd2c4229ca0
title: Snowy Mountain - Terrain
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";
import { Sky } from "@react-three/drei/Sky";

// <Sky
//         distance={4500} // Camera distance (default=450000)
//         sunPosition={[0, 1, 0]} // Sun position normal (defaults to inclination and azimuth if not set)
//         inclination={0} // Sun elevation angle from 0 to 1 (default=0)
//         azimuth={0.25} // Sun rotation around the Y axis from 0 to 1 (default=0.25)
//         {...props} // All three/examples/jsm/objects/Sky props are valid
//       />

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "../../../../introModels/Snow/scene.gltf"
  );
  return (
    <>
      <group ref={group} {...props} dispose={null} position={[11, -1, 1]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group
            position={[-6, 1, 1]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[5, 5, 5]}
          >
            <mesh
              material={materials.material_0}
              geometry={nodes.mesh_0.geometry}
            />
            <mesh
              material={materials.material_0}
              geometry={nodes.mesh_1.geometry}
            />
            <mesh
              material={materials.material_0}
              geometry={nodes.mesh_2.geometry}
            />
          </group>
        </group>
      </group>
    </>
  );
}

// useGLTF.preload("../../../../introModels/Snow/scene.gltf");
