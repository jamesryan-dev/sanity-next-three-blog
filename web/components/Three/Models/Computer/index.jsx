/* eslint-disable react/jsx-props-no-spreading */

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Brandon Westlake (https://sketchfab.com/dr.badass2142)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/82eaf2047e0447a1bfea22482f1d1404
title: Computer Setup - Older (FREE)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei/useGLTF";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "../../../../introModels/Computer/scene.gltf"
  );
  return (
    <group ref={group} {...props} dispose={null} scale={[0.005, 0.005, 0.005]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-18.51, 1.96, 22.84]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              material={materials.Misc}
              geometry={nodes.Cube000_Misc_0.geometry}
            />
          </group>
          <group
            position={[63.05, 40.59, -54.69]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <mesh
              material={materials.Tower}
              geometry={nodes.Cube004_Tower_0.geometry}
            />
          </group>
          <group
            position={[-43.62, 40.2, -52.69]}
            rotation={[-Math.PI / 2, 0, -1.39]}
            scale={[0.35, 0.35, 0.35]}
          >
            <mesh
              material={materials.Monitor}
              geometry={nodes.Cube003_Monitor_0.geometry}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("../../../../introModels/Computer/scene.gltf");