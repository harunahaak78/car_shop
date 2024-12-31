import React, {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import {Decal, Float, OrbitControls, Preload, useTexture} from '@react-three';
import { DirectionalLight, IcosahedronGeometry, Mesh } from "three/src/Three.Core.js";

const Ball = (props) => {
    const [decal] = useTexture([props.url]);

    return(
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
           <ambientLight intensity={0.25} />
           <DirectionalLight position={[0,0,0.05]}/>
           <Mesh castShadow receiveShadow scale={2.75}>
                <IcosahedronGeometry args={[1,1]}/>

           </Mesh>
        </Float>
    );

}

export default Ball