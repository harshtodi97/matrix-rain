import React, { useEffect, useRef} from "react";

const Matrix = (props) => {

  console.log('width', props.width)
  console.log('height', props.height)

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const katakana =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nums = "0123456789";

    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const colums = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < colums; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.fillStyle = "#0F0";
      context.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length)
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    setInterval(draw, 30);

  }, []);

  return (
    <canvas
      ref={canvasRef}
      {...props}
      width={props.width}
      height={props.height}
    />
  );
};

export default Matrix;
