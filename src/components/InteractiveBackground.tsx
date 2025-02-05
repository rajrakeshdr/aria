
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create brain mesh
    const brainGeometry = new THREE.SphereGeometry(5, 32, 32);
    const brainMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 mousePosition;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vec3 baseColor = vec3(0.0, 0.7, 1.0); // Cyan
          vec3 accentColor = vec3(1.0, 0.4, 0.0); // Orange
          
          float pulse = sin(time * 2.0) * 0.5 + 0.5;
          float circuit = sin(vUv.x * 20.0 + time) * sin(vUv.y * 20.0 + time);
          
          vec3 finalColor = mix(baseColor, accentColor, pulse * circuit);
          
          // Add mouse interaction glow
          float distToMouse = length(mousePosition - vUv);
          finalColor += vec3(1.0, 0.5, 0.0) * (1.0 - smoothstep(0.0, 0.5, distToMouse));
          
          gl_FragColor = vec4(finalColor, 0.9);
        }
      `,
      transparent: true,
    });

    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brain);

    // Position camera
    camera.position.z = 10;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Handle mouse movement
    const onMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (brainMaterial.uniforms) {
        brainMaterial.uniforms.mousePosition.value.x = mousePosition.current.x;
        brainMaterial.uniforms.mousePosition.value.y = mousePosition.current.y;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      time += 0.01;
      if (brainMaterial.uniforms) {
        brainMaterial.uniforms.time.value = time;
      }

      brain.rotation.x += 0.001;
      brain.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.8,
        background: 'linear-gradient(to right, #000428, #004e92)'
      }}
    />
  );
};

export default InteractiveBackground;
