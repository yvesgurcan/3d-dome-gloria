import React, { useEffect, useState } from 'react';
import { Canvas } from 'react-three-fiber';

import GlobalStyles from '../components/GlobalStyles';
import PermissionScreen from '../components/PermissionScreen';
import Camera from '../components/Camera';
import Controls from '../components/Controls';
import ControlsLimited from '../components/ControlsLimited';
import DeviceOrientation from '../components/DeviceOrientation';
import DomeWalls from '../components/DomeWalls';
import Pedestal from '../components/Pedestal';
import Triforce from '../components/Triforce';
import ScreenSupport from '../components/ScreenSupport';
import Screen from '../components/Screen';
import DomeFloor from '../components/DomeFloor';

export default () => {
    const [localHost, setLocalHost] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLocalHost(isLocalHost());
    }, []);

    function isLocalHost() {
        if (location.hostname === 'localhost') {
            console.info('This is localhost.');
            return true;
        }

        console.info('This is not localhost.');
        return false;
    }

    return (
        <span>
            <GlobalStyles />
            <Canvas style={{ background: 'rgb(140, 140, 255)' }}>
                <Camera position={[0, 0, 0]} />
                {localHost ? <Controls /> : <ControlsLimited />}
                <group position={[4, 0, 0]} rotation={[0, -Math.PI, 0]}>
                    <ambientLight intensity={0.85} />
                    <spotLight
                        color="white"
                        intensity={0.5}
                        position={[-20, 20, -5]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.1}
                        position={[-2, 9, 0]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.2}
                        position={[7, -3, -5]}
                    />
                    <directionalLight
                        color="white"
                        intensity={0.1}
                        position={[10, 6, 5]}
                    />
                    <Pedestal />
                    <Triforce />
                    <ScreenSupport
                        to="/inside/pin1"
                        position={[1.25, 0, 1.5]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, Math.PI / 4, 0]}
                    />
                    {/*<Screen
                    position={[1.8, 0, 1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, Math.PI / 4, 0]}
                />*/}
                    <ScreenSupport
                        to="/inside/pin2"
                        position={[1.25, 0, -1.5]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, -Math.PI / 4, 0]}
                    />
                    {/*<Screen
                    position={[1.8, 0, -1.95]}
                    dimension={[0, 1, 0.6]}
                    rotation={[0, -Math.PI / 4, 0]}
                />*/}
                    <ScreenSupport
                        to="/inside/pin3"
                        position={[-1.5, 0, -1.25]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, -Math.PI / 8, 0]}
                    />
                    <ScreenSupport
                        to="/inside/pin4"
                        position={[-1.5, 0, 1.25]}
                        dimension={[0.1, 1, 0.6]}
                        rotation={[0, Math.PI / 8, 0]}
                    />
                    <DomeFloor />
                    <DomeWalls />
                </group>
            </Canvas>
        </span>
    );
};
