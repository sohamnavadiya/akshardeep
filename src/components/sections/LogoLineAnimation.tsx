"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// 3D Point Interface
interface Point3D {
  x: number;
  y: number;
  z: number;
}

// Edge Connection Interface
interface Edge {
  a: number;
  b: number;
}

// Triangle Face Interface
interface Face {
  a: number;
  b: number;
  c: number;
}

// Edge Pulse Interface
interface Pulse {
  edgeIdx: number;
  progress: number; // 0 to 1
  speed: number;
  dir: number; // 1 or -1
  color: string;
}

// Orbiting Node Interface
interface OrbitNode {
  radius: number;
  angle: number;
  speed: number;
  tiltX: number;
  tiltZ: number;
  size: number;
  color: string;
  hasSubMesh?: boolean;
}

export function LogoLineAnimation({
  className = "",
  showControls = true,
}: {
  className?: string;
  showControls?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setIsHovered] = useState(false);

  // Rotation & Mouse interaction state refs
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const rotRef = useRef({ x: -0.15, y: 0, z: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // --- 1. DEFINE LOW-POLY 3D GEOMETRY ---
    // A complex low-poly industrial diamond / tooth emblem structure
    const baseVertices: Point3D[] = [
      // Top Crown Apex
      { x: 0, y: -160, z: 0 },

      // Upper Poly Ring (8 points)
      { x: -50, y: -110, z: 50 },
      { x: 50, y: -110, z: 50 },
      { x: 75, y: -110, z: 0 },
      { x: 50, y: -110, z: -50 },
      { x: -50, y: -110, z: -50 },
      { x: -75, y: -110, z: 0 },
      { x: 0, y: -120, z: 70 },
      { x: 0, y: -120, z: -70 },

      // Mid Waist Ring (10 points - wider)
      { x: -100, y: -40, z: 80 },
      { x: 0, y: -40, z: 110 },
      { x: 100, y: -40, z: 80 },
      { x: 125, y: -40, z: 0 },
      { x: 100, y: -40, z: -80 },
      { x: 0, y: -40, z: -110 },
      { x: -100, y: -40, z: -80 },
      { x: -125, y: -40, z: 0 },
      { x: -60, y: -30, z: 40 },
      { x: 60, y: -30, z: 40 },

      // Lower Taper Ring (8 points)
      { x: -80, y: 40, z: 60 },
      { x: 0, y: 50, z: 80 },
      { x: 80, y: 40, z: 60 },
      { x: 90, y: 40, z: 0 },
      { x: 80, y: 40, z: -60 },
      { x: 0, y: 50, z: -80 },
      { x: -80, y: 40, z: -60 },
      { x: -90, y: 40, z: 0 },

      // Bottom Dual Taper / Root Base (10 points)
      { x: -50, y: 120, z: 40 },
      { x: -10, y: 150, z: 20 },
      { x: -35, y: 170, z: 0 },
      { x: 10, y: 150, z: 20 },
      { x: 50, y: 120, z: 40 },
      { x: 35, y: 170, z: 0 },
      { x: 50, y: 120, z: -40 },
      { x: -50, y: 120, z: -40 },
      { x: 0, y: 80, z: 0 },
      { x: 0, y: -10, z: 0 },
    ];

    // Build triangular faces connecting base vertices
    const faces: Face[] = [
      // Top Crown
      { a: 0, b: 1, c: 7 },
      { a: 0, b: 7, c: 2 },
      { a: 0, b: 2, c: 3 },
      { a: 0, b: 3, c: 4 },
      { a: 0, b: 4, c: 8 },
      { a: 0, b: 8, c: 5 },
      { a: 0, b: 5, c: 6 },
      { a: 0, b: 6, c: 1 },

      // Upper to Mid Transition
      { a: 1, b: 9, c: 10 },
      { a: 1, b: 10, c: 7 },
      { a: 7, b: 10, c: 2 },
      { a: 2, b: 10, c: 11 },
      { a: 2, b: 11, c: 3 },
      { a: 3, b: 11, c: 12 },
      { a: 3, b: 12, c: 4 },
      { a: 4, b: 12, c: 13 },
      { a: 4, b: 13, c: 8 },
      { a: 8, b: 13, c: 14 },
      { a: 8, b: 14, c: 5 },
      { a: 5, b: 14, c: 15 },
      { a: 5, b: 15, c: 6 },
      { a: 6, b: 15, c: 16 },
      { a: 6, b: 16, c: 1 },
      { a: 1, b: 16, c: 9 },

      // Inner Core Ties
      { a: 17, b: 9, c: 10 },
      { a: 18, b: 10, c: 11 },
      { a: 17, b: 18, c: 10 },
      { a: 36, b: 17, c: 18 },

      // Mid to Lower Taper Transition
      { a: 9, b: 19, c: 20 },
      { a: 9, b: 20, c: 10 },
      { a: 10, b: 20, c: 21 },
      { a: 10, b: 21, c: 11 },
      { a: 11, b: 21, c: 22 },
      { a: 11, b: 22, c: 12 },
      { a: 12, b: 22, c: 23 },
      { a: 12, b: 23, c: 13 },
      { a: 13, b: 23, c: 24 },
      { a: 13, b: 24, c: 14 },
      { a: 14, b: 24, c: 25 },
      { a: 14, b: 25, c: 15 },
      { a: 15, b: 25, c: 26 },
      { a: 15, b: 26, c: 16 },
      { a: 16, b: 26, c: 27 },
      { a: 16, b: 27, c: 9 },
      { a: 9, b: 27, c: 19 },

      // Lower Taper to Roots
      { a: 19, b: 27, c: 36 },
      { a: 19, b: 28, c: 29 },
      { a: 19, b: 29, c: 30 },
      { a: 20, b: 29, c: 31 },
      { a: 21, b: 31, c: 32 },
      { a: 21, b: 32, c: 33 },
      { a: 21, b: 33, c: 22 },
      { a: 22, b: 33, c: 34 },
      { a: 24, b: 35, c: 25 },
      { a: 25, b: 35, c: 36 },
      { a: 26, b: 36, c: 27 },

      // Center Spoke Internal Wire Ties
      { a: 36, b: 28, c: 30 },
      { a: 32, b: 33, c: 34 },
      { a: 36, b: 35, c: 29 },
      { a: 32, b: 35, c: 31 },
    ];

    // Extract unique edges from faces
    const edgeMap = new Map<string, Edge>();
    faces.forEach((f) => {
      const pairs = [
        [f.a, f.b],
        [f.b, f.c],
        [f.c, f.a],
      ];
      pairs.forEach(([u, v]) => {
        const key = u < v ? `${u}_${v}` : `${v}_${u}`;
        if (!edgeMap.has(key)) {
          edgeMap.set(key, { a: Math.min(u, v), b: Math.max(u, v) });
        }
      });
    });
    const edges: Edge[] = Array.from(edgeMap.values());

    // Build adjacency list for traveling pulses
    const adjacency: number[][] = Array.from(
      { length: baseVertices.length },
      () => []
    );
    edges.forEach((edge, idx) => {
      if (adjacency[edge.a]) adjacency[edge.a].push(idx);
      if (adjacency[edge.b]) adjacency[edge.b].push(idx);
    });

    // Generate traveling pulses along wireframe edges
    const pulses: Pulse[] = [];
    const pulseColors = ["#FFE599", "#F3CB73", "#FFFFFF", "#DA251C", "#E5AA42"];
    for (let i = 0; i < 18; i++) {
      pulses.push({
        edgeIdx: Math.floor(Math.random() * edges.length),
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.015,
        dir: Math.random() > 0.5 ? 1 : -1,
        color: pulseColors[i % pulseColors.length],
      });
    }

    // --- 2. DEFINE CONCENTRIC ORBITAL RINGS & NODES ---
    const orbitNodes: OrbitNode[] = [
      {
        radius: 200,
        angle: 0.2,
        speed: 0.006,
        tiltX: 0.45,
        tiltZ: -0.2,
        size: 5,
        color: "#F3CB73",
      },
      {
        radius: 200,
        angle: 3.4,
        speed: 0.006,
        tiltX: 0.45,
        tiltZ: -0.2,
        size: 3.5,
        color: "#FFE599",
      },
      {
        radius: 290,
        angle: 1.8,
        speed: -0.004,
        tiltX: 0.35,
        tiltZ: 0.35,
        size: 6,
        color: "#DA251C",
      },
      {
        radius: 290,
        angle: 4.9,
        speed: -0.004,
        tiltX: 0.35,
        tiltZ: 0.35,
        size: 4,
        color: "#F3CB73",
      },
      {
        radius: 370,
        angle: 5.1,
        speed: 0.003,
        tiltX: 0.25,
        tiltZ: -0.15,
        size: 7,
        color: "#FFE599",
        hasSubMesh: true,
      },
      {
        radius: 370,
        angle: 2.1,
        speed: 0.003,
        tiltX: 0.25,
        tiltZ: -0.15,
        size: 5,
        color: "#E5AA42",
        hasSubMesh: true,
      },
    ];

    // Mini sub-mesh for floating orbiting shapes
    const subMeshVerts: Point3D[] = [
      { x: 0, y: -20, z: 0 },
      { x: -12, y: -5, z: 10 },
      { x: 12, y: -5, z: 10 },
      { x: 0, y: -5, z: -15 },
      { x: -10, y: 15, z: 5 },
      { x: 10, y: 15, z: 5 },
    ];
    const subMeshEdges: Edge[] = [
      { a: 0, b: 1 },
      { a: 0, b: 2 },
      { a: 0, b: 3 },
      { a: 1, b: 2 },
      { a: 2, b: 3 },
      { a: 3, b: 1 },
      { a: 1, b: 4 },
      { a: 2, b: 5 },
      { a: 4, b: 5 },
      { a: 3, b: 4 },
      { a: 3, b: 5 },
    ];

    // --- 3. 3D MATH & PROJECTION HELPERS ---
    function rotate3D(p: Point3D, rx: number, ry: number, rz: number): Point3D {
      // Rotate Y
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x1 = p.x * cosY + p.z * sinY;
      const y1 = p.y;
      const z1 = -p.x * sinY + p.z * cosY;

      // Rotate X
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y2 = y1 * cosX - z1 * sinX;
      const z2 = y1 * sinX + z1 * cosX;
      const x2 = x1;

      // Rotate Z
      const cosZ = Math.cos(rz);
      const sinZ = Math.sin(rz);
      const x3 = x2 * cosZ - y2 * sinZ;
      const y3 = x2 * sinZ + y2 * cosZ;
      const z3 = z2;

      return { x: x3, y: y3, z: z3 };
    }

    function project(
      p: Point3D,
      w: number,
      h: number,
      scaleFactor: number
    ) {
      const fov = 700;
      const cameraZ = 650;
      const distance = cameraZ + p.z;
      const scale = (fov / Math.max(distance, 100)) * scaleFactor;
      return {
        x: w / 2 + p.x * scale,
        y: h / 2 + p.y * scale,
        scale,
        z: p.z,
      };
    }

    // Canvas Resize Handler
    let width = 0;
    let height = 0;

    function resize() {
      if (!containerRef.current || !canvas || !ctx) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    // --- 4. RENDER LOOP ---
    let time = 0;

    function render() {
      if (!ctx) return;
      time += 0.016;

      // Clear & Background Glow
      ctx.clearRect(0, 0, width, height);

      // Deep Navy Radial Background Glow
      const bgGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.6
      );
      bgGlow.addColorStop(0, "rgba(41, 22, 111, 0.45)");
      bgGlow.addColorStop(0.5, "rgba(12, 21, 56, 0.3)");
      bgGlow.addColorStop(1, "rgba(8, 14, 38, 0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Radial Gold Ambient Center Core Glow
      const centerGlow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        180
      );
      centerGlow.addColorStop(0, "rgba(243, 203, 115, 0.18)");
      centerGlow.addColorStop(0.4, "rgba(218, 37, 28, 0.08)");
      centerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = centerGlow;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 180, 0, Math.PI * 2);
      ctx.fill();

      // Smooth Rotation Interpolation (Mouse Parallax)
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      const baseScale = Math.min(width, height) / 520;
      const rotY = rotRef.current.y + time * 0.25 + mousePos.current.x * 0.35;
      const rotX = rotRef.current.x + Math.sin(time * 0.8) * 0.06 + mousePos.current.y * 0.25;
      const rotZ = Math.cos(time * 0.5) * 0.03;

      // --- A. DRAW CONCENTRIC ORBITAL RINGS ---
      const orbitRadii = [
        { r: 200, tiltX: 0.45, tiltZ: -0.2, alpha: 0.22, dash: [] },
        { r: 290, tiltX: 0.35, tiltZ: 0.35, alpha: 0.16, dash: [4, 6] },
        { r: 370, tiltX: 0.25, tiltZ: -0.15, alpha: 0.12, dash: [] },
        { r: 450, tiltX: 0.55, tiltZ: 0.1, alpha: 0.08, dash: [8, 12] },
      ];

      orbitRadii.forEach(({ r, tiltX, tiltZ, alpha, dash }) => {
        ctx.save();
        ctx.beginPath();
        const steps = 90;
        ctx.setLineDash(dash);

        for (let i = 0; i <= steps; i++) {
          const a = (i / steps) * Math.PI * 2;
          const pRaw: Point3D = {
            x: Math.cos(a) * r,
            y: 0,
            z: Math.sin(a) * r,
          };
          const pRot = rotate3D(pRaw, tiltX + rotX * 0.3, rotY * 0.2, tiltZ);
          const p2D = project(pRot, width, height, baseScale);

          if (i === 0) ctx.moveTo(p2D.x, p2D.y);
          else ctx.lineTo(p2D.x, p2D.y);
        }

        ctx.strokeStyle = `rgba(243, 203, 115, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      });

      // --- B. DRAW ORBITING NODES & SUB-MESHES ---
      orbitNodes.forEach((node) => {
        node.angle += node.speed;
        const pRaw: Point3D = {
          x: Math.cos(node.angle) * node.radius,
          y: 0,
          z: Math.sin(node.angle) * node.radius,
        };
        const pRot = rotate3D(pRaw, node.tiltX + rotX * 0.3, rotY * 0.2, node.tiltZ);
        const p2D = project(pRot, width, height, baseScale);

        // Glowing Node Particle
        ctx.save();
        ctx.shadowBlur = 12;
        ctx.shadowColor = node.color;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(p2D.x, p2D.y, node.size * p2D.scale * 0.9, 0, Math.PI * 2);
        ctx.fill();

        // Optional Orbiting Sub-Mesh (Tooth / Valve representation)
        if (node.hasSubMesh) {
          const transformedSub = subMeshVerts.map((v) => {
            const rotV = rotate3D(v, time * 0.8, node.angle * 2, 0);
            return project(
              rotate3D(
                {
                  x: pRaw.x + rotV.x,
                  y: pRaw.y + rotV.y,
                  z: pRaw.z + rotV.z,
                },
                node.tiltX + rotX * 0.3,
                rotY * 0.2,
                node.tiltZ
              ),
              width,
              height,
              baseScale * 0.45
            );
          });

          ctx.strokeStyle = "rgba(243, 203, 115, 0.45)";
          ctx.lineWidth = 0.8;
          subMeshEdges.forEach((e) => {
            ctx.beginPath();
            ctx.moveTo(transformedSub[e.a].x, transformedSub[e.a].y);
            ctx.lineTo(transformedSub[e.b].x, transformedSub[e.b].y);
            ctx.stroke();
          });
        }
        ctx.restore();
      });

      // --- C. TRANSFORM CENTRAL 3D MESH VERTICES ---
      const transformedVerts = baseVertices.map((v) => {
        const rotated = rotate3D(v, rotX, rotY, rotZ);
        return project(rotated, width, height, baseScale);
      });

      // --- D. RENDER POLYGON FACES WITH TRANSPARENT GOLDEN/NAVY GRADIENT FILL ---
      const sortedFaces = faces
        .map((f) => {
          const zAvg =
            (transformedVerts[f.a].z +
              transformedVerts[f.b].z +
              transformedVerts[f.c].z) /
            3;
          return { face: f, zAvg };
        })
        .sort((a, b) => b.zAvg - a.zAvg);

      sortedFaces.forEach(({ face: f }) => {
        const p1 = transformedVerts[f.a];
        const p2 = transformedVerts[f.b];
        const p3 = transformedVerts[f.c];

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.lineTo(p3.x, p3.y);
        ctx.closePath();

        const normZ = (p1.z + p2.z + p3.z) / 3;
        const depthAlpha = Math.max(0.02, Math.min(0.12, ((normZ + 150) / 300) * 0.1));

        ctx.fillStyle = `rgba(243, 203, 115, ${depthAlpha})`;
        ctx.fill();
      });

      // --- E. RENDER GOLDEN GEOMETRIC WIREFRAME EDGES ---
      ctx.save();
      edges.forEach((edge) => {
        const p1 = transformedVerts[edge.a];
        const p2 = transformedVerts[edge.b];

        const avgZ = (p1.z + p2.z) / 2;
        const alpha = Math.max(0.25, Math.min(0.9, (avgZ + 180) / 360));
        const thickness = Math.max(1, Math.min(2.5, ((avgZ + 200) / 200) * 1.6));

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(235, 185, 80, ${alpha})`;
        ctx.lineWidth = thickness;
        ctx.stroke();
      });
      ctx.restore();

      // --- F. RENDER ANIMATED LINE PULSES (ENERGY TRAVELING ALONG EDGES) ---
      pulses.forEach((p) => {
        p.progress += p.speed * p.dir;

        if (p.progress >= 1 || p.progress <= 0) {
          const currentEdge = edges[p.edgeIdx];
          const endVert = p.progress >= 1 ? currentEdge.b : currentEdge.a;
          const nextEdges = adjacency[endVert];

          if (nextEdges && nextEdges.length > 0) {
            p.edgeIdx = nextEdges[Math.floor(Math.random() * nextEdges.length)];
            p.progress = p.progress >= 1 ? 0 : 1;
          } else {
            p.dir *= -1;
            p.progress = Math.max(0, Math.min(1, p.progress));
          }
        }

        const edge = edges[p.edgeIdx];
        const p1 = transformedVerts[edge.a];
        const p2 = transformedVerts[edge.b];

        const px = p1.x + (p2.x - p1.x) * p.progress;
        const py = p1.y + (p2.y - p1.y) * p.progress;

        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillStyle = "#FFFFFF";

        ctx.beginPath();
        ctx.arc(px, py, 3 * p1.scale, 0, Math.PI * 2);
        ctx.fill();

        const trailLength = 0.25;
        const prevProg = Math.max(0, p.progress - trailLength * p.dir);
        const tx = p1.x + (p2.x - p1.x) * prevProg;
        const ty = p1.y + (p2.y - p1.y) * prevProg;

        const grad = ctx.createLinearGradient(tx, ty, px, py);
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(1, p.color);

        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(px, py);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5 * p1.scale;
        ctx.stroke();
        ctx.restore();
      });

      // --- G. RENDER VERTEX NODES (GLOWING DOTS AT CORNERS) ---
      transformedVerts.forEach((v) => {
        const nodeAlpha = Math.max(0.3, Math.min(1, (v.z + 180) / 360));
        ctx.save();
        ctx.fillStyle = `rgba(255, 230, 160, ${nodeAlpha})`;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 2 * v.scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse Move Event Handler for Parallax
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mousePos.current.targetX = x * 1.5;
    mousePos.current.targetY = y * 1.5;
  };

  const handleMouseLeave = () => {
    mousePos.current.targetX = 0;
    mousePos.current.targetY = 0;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full min-h-[440px] sm:min-h-[520px] lg:min-h-[580px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a122e] via-[#101b44] to-[#0a122e] border border-white/10 shadow-2xl flex items-center justify-center ${className}`}
    >
      {/* Background blueprint grid overlay */}
      <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none" />

      {/* Top Corner Technical Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-amber-300 uppercase shadow-lg">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        Line Movement Mesh • 3D Poly Engine
      </div>

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="relative z-0 block cursor-grab active:cursor-grabbing" />

      {/* Overlay Instructions / Legend */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/10 text-xs text-white/80"
        >
          <div className="flex items-center gap-3 font-sans">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-300 to-amber-500 shadow-[0_0_8px_#f3cb73]" />
            <span className="font-semibold text-white">Akshardeep Geometric Wireframe</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/60">
            <span className="hidden sm:inline">✦ Move cursor to rotate 3D mesh</span>
            <span className="px-2 py-0.5 rounded bg-white/10 text-amber-300 font-mono">
              60 FPS Dynamic Pulses
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}
