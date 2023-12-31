import { useEffect, useRef } from "react";

interface RevolveTextProps {
  span?: number;
  north?: number;
  spiral?: boolean;
  size?: number;
  text: string;
}

const RevolveText: React.FC<RevolveTextProps> = ({
  span = 100,
  north = 0,
  spiral = false,
  size,
  text,
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (targetRef.current) {
      const targetElement = targetRef.current;
      const message = targetElement.textContent || "";
      const quaterWidth = targetElement.clientWidth / 4;
      const diameter = size || quaterWidth;
      const messageChunks = message.split("");
      const length = messageChunks.length;
      const offsetEnd = 1;
      const l = length + offsetEnd;
      const CIRC_MAX = 360;
      const PERC_MAX = 100;
      const ofDeg = (span * CIRC_MAX) / PERC_MAX;
      const ofNorth = (north * CIRC_MAX) / PERC_MAX;
      const segDeg = ofDeg / l;
      const fontSize = 16;
      let a = 0;
      let i = 0;

      targetElement.setAttribute(
        "style",
        `
        padding-left: ${diameter / 2}px;
        display: inline-block;
        width: ${diameter / 2}px;
        height: 50px;
        transform: rotate3d(0, 0, 1, -${segDeg + ofNorth}deg);
        border-radius: 9e9em;
        position: absolute;
        top: 10px;
        left: -20px;
        z-index: 2;
      `
      );
      targetElement.classList.add("fx-Revolve");
      targetElement.textContent = "";

      while (a < ofDeg) {
        a += segDeg;
        const charWrapper = document.createElement("span");
        charWrapper.textContent = messageChunks[i];
        i++;
        charWrapper.classList.add("fx-RevolveCharWrap");
        charWrapper.setAttribute(
          "style",
          `
          display: inline-block;
          transform: rotate3d(0, 0, 1, ${a}deg) 
          ${spiral ? "translateY(" + i + "px)" : ""};
          ${spiral ? "font-size:" + (fontSize - i / 10) + "px" : ""};
          position: absolute;
          height: ${diameter / 2}px;
          transform-origin: bottom left;
          font-size: 1em;
        `
        );
        targetElement.appendChild(charWrapper);
      }
    }
  }, [span, north, spiral, size]);

  return (
    <div ref={targetRef} className="tar3">
      {text}
    </div>
  );
};

export default RevolveText;
