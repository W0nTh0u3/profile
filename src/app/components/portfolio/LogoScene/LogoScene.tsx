'use client';

import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { MeshStandardMaterial } from 'three';
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

function LogoModel({ palette }: { palette: ThemePalette }) {
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

    useFrame(() => {
        if (!groupRef.current)
            return;
        const progress = Math.min(window.scrollY / window.innerHeight, 1.2);
        groupRef.current.rotation.x = -0.18 + progress * 0.35;
        groupRef.current.rotation.y = progress * Math.PI * 2;
        groupRef.current.rotation.z = progress * .12;
        groupRef.current.position.y = progress * 0.6;
    });

    return <primitive ref={groupRef} object={model} scale={0.68} />;
}

export function LogoScene() {
    const [theme, setTheme] = useState<ThemeName>('miami-vice');
    const palette = themePalettes[theme];

    useEffect(() => {
        const currentTheme = document.documentElement.dataset.theme as ThemeName | undefined;
        if (currentTheme && currentTheme in themePalettes) setTheme(currentTheme);

        const handleThemeChange = (event: Event) => setTheme((event as CustomEvent<ThemeName>).detail);
        window.addEventListener('portfolio-theme-change', handleThemeChange);
        return () => window.removeEventListener('portfolio-theme-change', handleThemeChange);
    }, []);

    return (
        <div className={styles.stage} aria-hidden="true">
            <Canvas
                camera={{ fov: 35, position: [0, 0, 5] }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true }}>
                <ambientLight intensity={1.4} />
                <directionalLight position={[3, 4, 5]} intensity={2.2} />
                <pointLight color={palette.accent} position={[-3, -2, 3]} intensity={16} distance={8} />
                <Suspense fallback={null}>
                    <LogoModel palette={palette} />
                </Suspense>
            </Canvas>
        </div>
    );
}

useGLTF.preload('/logo-3d.glb');
