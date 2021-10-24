import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import Bishop from "../Models/Bishop/index";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Computer from "../Models/Computer/index";
import Madrona from "../Models/Madrona/Model-draco.jsx";
import Snow from "../Models/Snow/index";
import NeedSomeSpace from "../Models/needSomeSpace/index.jsx";

extend({ OrbitControls });

function RenderModel(props) {
  const { type } = props;
  const group = useRef();
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame(() => {
    group.current.rotation.y += selectRotate(type);
  });
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const selectRotate = (type) => {
    if (type == "snow") {
      return 0;
    } else {
      return 0.004;
    }
  };

  const selectModel = (type) => {
    if (type == "bishop") {
      return <Bishop />;
    } else if (type == "computer") {
      return <Computer />;
    } else if (type == "madrona") {
      return <Madrona />;
    } else if (type == "snow") {
      return <Snow />;
    } else if (type == "shape") {
      return <NeedSomeSpace />;
    } else {
      return <Bishop />;
    }
  };

  return (
    <group ref={group}>
      {selectModel(type)}
      <orbitControls args={[camera, domElement]} />
    </group>
  );
}

function CanvasIntro(props) {
  const { type } = props;

  const setCameraPositonX = (type) => {
    if (type == "bishop") {
      return 1;
    } else if (type == "computer") {
      return 1;
    } else if (type == "madrona") {
      return 3;
    } else if (type == "snow") {
      return 6;
    } else {
      return 1;
    }
  };

  const setCameraPositonY = (type) => {
    if (type == "bishop") {
      return 1;
    } else if (type == "computer") {
      return 1;
    } else if (type == "madrona") {
      return 5;
    } else {
      return 1;
    }
  };

  const setCameraPositonZ = (type) => {
    if (type == "bishop") {
      return 1;
    } else if (type == "computer") {
      return 1;
    } else if (type == "madrona") {
      return 5;
    } else {
      return 1;
    }
  };
  return (
    <Canvas
      camera={{
        position: [
          setCameraPositonX(type),
          setCameraPositonY(type),
          setCameraPositonZ(type),
        ],
        near: 1,
        far: 15,
      }}
    >
      <ambientLight intensity={0.888} />
      <pointLight intensity={0.2} position={[0, 0, 1]} />
      <Suspense fallback={null}>
        <RenderModel type={type} />
      </Suspense>
    </Canvas>
  );
}

export default CanvasIntro;
