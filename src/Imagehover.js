import './css/hoverlay.css';
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";

export default function Imagehover() {
    useEffect(() => {
        let atScroll = false;
        let parallaxTitle = document.querySelectorAll(".parallax-title");

        const scrollProgress = () => {
            atScroll = true;
        };

        const raf = () => {
            if (atScroll) {
                parallaxTitle.forEach((element, index) => {
                    element.style.transform = "translateX(" + window.scrollY / 26 + "%)";
                });
                atScroll = false;
            }
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
        window.addEventListener("scroll", scrollProgress);
    });

    return (
        <div className="smooth">
            <div class="smooth-scroll-wrapper">
                <div class="content">
                    <div class="hover-container">
                        <div class="image-container">
                            <h2 class="texts text-dark">
                                <span class="parallax-title">
                                    Follow me, Coming soon..
                                </span>
                            </h2>
                        </div>

                        <h2 class="texts">
                            <span class="parallax-title">
                                Follow me, Coming soon..
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}