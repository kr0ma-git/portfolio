import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function Grain() {
  return (
    <ShaderGradientCanvas>
      <ShaderGradient
        animate="on"
        brightness={0.7}
        cAzimuthAngle={172}
        cDistance={3.6}
        cPolarAngle={128}
        cameraZoom={1}
        color1="#3dff57"
        color2="#db3e39"
        color3="#7ec0e1"
        envPreset="city"
        grain="on"
        lightType="3d"
        positionX={-1.4}
        positionY={0}
        positionZ={0}
        range="disabled"
        rangeEnd={40}
        rangeStart={0}
        reflection={0.1}
        rotationX={0}
        rotationY={10}
        rotationZ={50}
        shader="defaults"
        type="plane"
        uAmplitude={1}
        uDensity={4.6}
        uFrequency={5.5}
        uSpeed={0.4}
        uStrength={4}
        uTime={0}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  );
}
