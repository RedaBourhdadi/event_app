// components/QRCodeGenerator.tsx
import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface QRCodeGeneratorProps {
  text: string;
  width?: number;
  margin?: number;
  color?: {
    dark?: string;
    light?: string;
  };
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  text,
  width = 200,
  margin = 4,
  color = { dark: "#000000", light: "#ffffff" },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current && text) {
      QRCode.toCanvas(
        canvasRef.current,
        text,
        {
          width,
          margin,
          color,
        },
        (error) => {
          if (error) console.error(error);
        }
      );
    }
  }, [text, width, margin, color]);

  return <canvas ref={canvasRef} />;
};

export default QRCodeGenerator;
