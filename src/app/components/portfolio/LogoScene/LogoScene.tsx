'use client';

import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { MathUtils, MeshStandardMaterial } from 'three';
import type { Group, Mesh } from 'three';
import { themePalettes, type ThemeName } from '../data';
import styles from './LogoScene.module.scss';

type ThemePalette = (typeof themePalettes)[ThemeName];

function updateMaterial(material: MeshStandardMaterial, color: string) {
    material.color.set(color);
    material.emissive.set('#000000');
    material.emissiveIntensity = 0;
    material.needsUpdate = true;
}

function LogoModel({ palette, spinOffset, spinVelocity, dragging, resetRequested }: { palette: ThemePalette; spinOffset: React.RefObject<number>; spinVelocity: React.RefObject<number>; dragging: React.RefObject<boolean>; resetRequested: React.RefObject<boolean> }) {
    const groupRef = useRef<Group>(null);
    const { scene } = useGLTF('/logo-3d.glb');
    const model = useMemo(() => {
        const clone = scene.clone(true);
        clone.traverse((object) => {
            if (!('isMesh' in object) || !object.isMesh) return;

            const mesh = object as Mesh;
            mesh.geometry = mesh.geometry.clone();
            mesh.material = new MeshStandardMaterial({ metalness: .25, roughness: .45 });
        });
        return clone;
    }, [scene]);

    useEffect(() => {
        model.traverse((object) => {
            if (!('isMesh' in object) || !object.isMesh) return;

            const mesh = object as Mesh;
            const { material } = mesh;
            const color = mesh.name.includes('Upper_Part') ? palette.accent : palette.primary;
            (Array.isArray(material) ? material : [material]).forEach((item) => updateMaterial(item as MeshStandardMaterial, color));
        });
    }, [model, palette]);

    useFrame((_, delta) => {
        if (!groupRef.current)
            return;
        if (!dragging.current && Math.abs(spinVelocity.current) > .001) {
            spinOffset.current += spinVelocity.current * delta;
            spinVelocity.current = MathUtils.damp(spinVelocity.current, 0, 3.2, delta);
        }
        if (resetRequested.current && Math.abs(spinVelocity.current) < .01) {
            spinOffset.current = MathUtils.damp(spinOffset.current, 0, 4, delta);
            if (Math.abs(spinOffset.current) < .001) resetRequested.current = false;
        }
        const progress = Math.min(window.scrollY / window.innerHeight, 1.2);
        groupRef.current.rotation.x = -0.18 + progress * 0.35;
        groupRef.current.rotation.y = progress * Math.PI * 2 + spinOffset.current;
        groupRef.current.rotation.z = progress * .12;
        groupRef.current.position.y = progress * 0.6;
    });

    return <primitive ref={groupRef} object={model} scale={0.75} />;
}

export function LogoScene() {
    const [theme, setTheme] = useState<ThemeName>('miami-vice');
    const [dragging, setDragging] = useState(false);
    const palette = themePalettes[theme];
    const dragStartX = useRef<number | null>(null);
    const dragMoveTime = useRef(0);
    const draggingRef = useRef(false);
    const spinOffset = useRef(0);
    const spinVelocity = useRef(0);
    const resetRequested = useRef(false);
    const resetTimer = useRef<number | undefined>(undefined);

    useEffect(() => {
        const currentTheme = document.documentElement.dataset.theme as ThemeName | undefined;
        if (currentTheme && currentTheme in themePalettes) setTheme(currentTheme);

        const handleThemeChange = (event: Event) => setTheme((event as CustomEvent<ThemeName>).detail);
        window.addEventListener('portfolio-theme-change', handleThemeChange);
        return () => window.removeEventListener('portfolio-theme-change', handleThemeChange);
    }, []);

    useEffect(() => () => window.clearTimeout(resetTimer.current), []);

    const scheduleReset = () => {
        window.clearTimeout(resetTimer.current);
        resetTimer.current = window.setTimeout(() => { resetRequested.current = true; }, 2500);
    };

    const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
        dragStartX.current = null;
        draggingRef.current = false;
        setDragging(false);
        event.currentTarget.releasePointerCapture(event.pointerId);
        scheduleReset();
    };

    return (
        <div
            className={`${styles.stage} ${dragging ? styles.dragging : ''}`}
            data-cursor="drag"
            role="img"
            tabIndex={0}
            aria-label="Interactive 3D Ryan Verzo logo. Drag or use the arrow keys to spin it."
            onKeyDown={(event) => {
                if (event.key === 'ArrowLeft') spinOffset.current -= .25;
                if (event.key === 'ArrowRight') spinOffset.current += .25;
                if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') scheduleReset();
            }}
            onPointerDown={(event) => {
                if (event.pointerType === 'mouse' && event.button !== 0) return;
                window.clearTimeout(resetTimer.current);
                resetRequested.current = false;
                spinVelocity.current = 0;
                dragStartX.current = event.clientX;
                dragMoveTime.current = event.timeStamp;
                draggingRef.current = true;
                setDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
                if (dragStartX.current === null) return;
                const rotationDelta = (event.clientX - dragStartX.current) * .012;
                const elapsed = Math.max(event.timeStamp - dragMoveTime.current, 16) / 1000;
                spinOffset.current += rotationDelta;
                spinVelocity.current = MathUtils.lerp(spinVelocity.current, rotationDelta / elapsed, .35);
                dragStartX.current = event.clientX;
                dragMoveTime.current = event.timeStamp;
            }}
            onPointerUp={finishDrag}
            onPointerCancel={finishDrag}>
            <Canvas
                camera={{ fov: 35, position: [0, 0, 5] }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={1.4} />
                <directionalLight position={[3, 4, 5]} intensity={2.2} />
                <pointLight color={palette.accent} position={[-3, -2, 3]} intensity={16} distance={8} />
                <Suspense fallback={null}>
                    <LogoModel palette={palette} spinOffset={spinOffset} spinVelocity={spinVelocity} dragging={draggingRef} resetRequested={resetRequested} />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/logo-3d.glb');
