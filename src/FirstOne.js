import './css/firstone.css';
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";

export default function FirstOne() {
  useEffect(() => {
    document.addEventListener("mousemove", e => {
      gsap.to(".text", {
          x: e.clientX,
          y: e.clientY,
          stagger: -0.02
      });
  });
  });

  return (
    <div className='all'>
      <div className="text-effect">
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>MH.</div>
        <div className='text'>
          <span>MH.</span>
        </div>
      </div>
    </div>
  );
}
