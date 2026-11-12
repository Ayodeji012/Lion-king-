import { useMemo, useRef, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function ChainLinks() {
  const group = useRef()
  const instanced = useRef()
  const links = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-5, 1.4, 0), new THREE.Vector3(-3.5, .4, -.3),
      new THREE.Vector3(-1.7, -.4, .2), new THREE.Vector3(0, .2, 0),
      new THREE.Vector3(1.8, 1, -.2), new THREE.Vector3(3.5, .2, .2),
      new THREE.Vector3(5, -.8, 0)
    ])
    return Array.from({length:80},(_,i)=>{
      const t=i/79
      const position=curve.getPointAt(t)
      const tangent=curve.getTangentAt(t).normalize()
      const quaternion=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(1,0,0),tangent)
      quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(tangent,(i%2)*Math.PI/2))
      return {position,quaternion}
    })
  },[])
  useEffect(()=>{
    if(!instanced.current) return
    const dummy=new THREE.Object3D()
    links.forEach((link,i)=>{
      dummy.position.copy(link.position)
      dummy.quaternion.copy(link.quaternion)
      dummy.scale.setScalar(1)
      dummy.updateMatrix()
      instanced.current.setMatrixAt(i,dummy.matrix)
    })
    instanced.current.instanceMatrix.needsUpdate=true
  },[links])
  useEffect(()=>{
    const el=group.current
    if(!el) return
    const proxy={rotation:0,lift:0}
    const tween=gsap.to(proxy,{rotation:Math.PI*1.15,lift:1.1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1}})
    const ticker=()=>{el.rotation.y=proxy.rotation;el.position.y=proxy.lift*.25}
    gsap.ticker.add(ticker)
    return ()=>{gsap.ticker.remove(ticker);tween.scrollTrigger?.kill();tween.kill()}
  },[])
  return <group ref={group}>
    <instancedMesh ref={instanced} args={[undefined,undefined,80]} castShadow receiveShadow>
      <torusGeometry args={[.22,.085,12,28]}/>
      <meshStandardMaterial color="#d7ad61" metalness={1} roughness={.2}/>
    </instancedMesh>
  </group>
}
function Scene(){return <><ambientLight intensity={.65}/><directionalLight position={[3,5,4]} intensity={3.2} color="#ffe0a3"/><pointLight position={[-4,-2,3]} intensity={18} color="#9d4d27"/><ChainLinks/><Environment preset="city"/></>}
export default function ChainScene(){return <div className="chain-canvas" aria-label="Animated 3D metallic chain"><Suspense fallback={<div className="canvas-fallback">LION KING · DIGITAL STUDIO</div>}><Canvas camera={{position:[0,0,9],fov:42}} dpr={[1,1.5]} gl={{antialias:true,alpha:true}}><Scene/></Canvas></Suspense></div>}
