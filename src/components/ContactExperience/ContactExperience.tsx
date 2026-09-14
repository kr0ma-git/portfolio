import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Computer } from "../Models/ComputerModel/Computer-optimized";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
      {/* Cool, muted lighting matching the site's palette instead of the
          warm peach/cream tones from the original tutorial scene --
          #fff4e6/#ffd9b3 read as a cozy warm-desk look, which clashes with
          the near-black/teal liminal aesthetic everywhere else on the
          site. Pulled from your existing --color-accent/--color-accent-dim
          tokens instead of inventing new ones. */}
      <ambientLight intensity={0.5} color="#7fa69e" />
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#e7e6e2" />
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#e7e6e2"
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* <Center> measures the model's real bounding box and re-centers it
          at the origin -- this is what actually fixes "the model won't sit
          right", not further guessing at position numbers. The model's
          own root group has a baked-in offset (position={[-4.005, 67.549,
          58.539]} in Computer.jsx, from its original Blender scene) that
          no amount of manual position-tuning on an outer wrapper properly
          cancels out; <Center> does it based on actual geometry instead. */}
      <group scale={0.03} position={[0, -1.5, -2]}>
        <Center>
          <Computer />
        </Center>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
