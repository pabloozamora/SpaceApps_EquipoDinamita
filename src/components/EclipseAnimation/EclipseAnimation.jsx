import React, { useRef, useEffect, useState } from "react";
import style from "./EclipseAnimation.module.scss";

function EclipseAnimation() {
  const canvasRef = useRef(null);
  const [canvasContext, setCanvasContext] = useState();
  const starsNumber = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setCanvasContext(context);
  }, []);

  useEffect(() => {
    let starArr = [];
    if (canvasContext) {
      canvasContext.fillStyle = "#212123";
      canvasContext.fillRect(
        0,
        0,
        canvasContext.canvas.width,
        canvasContext.canvas.height
      );
      for (let i = 0; i < starsNumber; i++) {
        console.log(i);
        const star = {
          x: Math.random() * canvasContext.canvas.width,
          y: Math.random() * canvasContext.canvas.height,
        };
        starArr.push(star);
      }
      starArr.forEach((star) => {
        canvasContext.fillStyle = "white";
        canvasContext.moveTo(star.x - 1, star.y - 1);
        canvasContext.lineTo(star.x, star.y);
        canvasContext.strokeStyle = '#ffffff';
        canvasContext.stroke();
      });
    }
  }, [canvasContext]);

  return (
    <div className={style.eclipse}>
      <canvas className={style.sky} ref={canvasRef} width={"1920"} height={"1080"}/>
      <div className={style.sun}></div>
      <div className={style.moon}></div>
    </div>
  );
}

export { EclipseAnimation };
