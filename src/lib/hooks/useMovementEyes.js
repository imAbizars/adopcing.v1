import { useRef } from "react";

export default function useEyeMovement() {
  const eyeRefs = useRef([]);

  const handleMouseMove = (e) => {
    eyeRefs.current.forEach((eye) => {
      if (!eye) return;
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(rect.width / 5, rect.height / 5);
      const pupilX = distance * Math.cos(angle);
      const pupilY = distance * Math.sin(angle);

      const pupil = eye.querySelector(".pupil");
      if (pupil) {
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      }
    });
  };

  return { eyeRefs, handleMouseMove };
}
