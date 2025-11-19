"use client";
import { useState, useEffect } from 'react';
import "./card-style.css";

export default function CardSlider() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [sliderOffset, setSliderOffset] = useState(20);

  useEffect(() => {
    if (window.innerWidth < 992) setSliderOffset(0);

    const firstSlide = document.querySelector<HTMLElement>(".slide_item");
    if (firstSlide) {
      firstSlide.classList.add("is--current");
      setSlideWidth(firstSlide.offsetWidth - sliderOffset);
    }

    function handleArrowClick(event: MouseEvent) {
      const arrow = event.currentTarget as HTMLElement;
      const slideContainer = arrow.closest<HTMLElement>(".slide_contain");
      if (!slideContainer) return;

      const items = slideContainer.querySelectorAll<HTMLElement>(".slide_item");
      if (!items.length) return;

      let newIndex = currentIndex;
      if (arrow.classList.contains("is--right") && currentIndex < items.length - 1) {
        newIndex = currentIndex + 1;
      }
      if (arrow.classList.contains("is--left") && currentIndex > 0) {
        newIndex = currentIndex - 1;
      }
      items.forEach((item, i) => {
        if (i < newIndex) {
          // Stack cards to the left with offset - keep them at position 0 with slight offset
          const stackOffset = (i) * 20; // 20px offset per card
          item.style.transform = `translateX(${stackOffset}px)`;
          item.style.zIndex = String(i);
        } else {
          // Normal sliding for current and right cards
          const slideAmount = (i - newIndex) * slideWidth;
          item.style.transform = `translateX(${slideAmount}px)`;
          item.style.zIndex = String(items.length + i);
        }
      });

      // Update arrows
      slideContainer.querySelectorAll<HTMLElement>(".slide_arrow").forEach(a => {
        a.classList.remove("is--disabled-arrow");
      });
      if (newIndex === 0) {
        const left = slideContainer.querySelector<HTMLElement>(".slide_arrow.is--left");
        if (left) left.classList.add("is--disabled-arrow");
      }
      if (newIndex === items.length - 1) {
        const right = slideContainer.querySelector<HTMLElement>(".slide_arrow.is--right");
        if (right) right.classList.add("is--disabled-arrow");
      }

      // Move slides
      items.forEach(item => {
        item.style.transform = `translateX(-${newIndex * slideWidth}px)`;
      });

      setCurrentIndex(newIndex);
    }

    const arrows = document.querySelectorAll<HTMLElement>(".slide_arrow");
    arrows.forEach(arrow => arrow.addEventListener("click", handleArrowClick));

    function handleResize() {
      if (window.innerWidth > 767) {
        const slideContainer = document.querySelector<HTMLElement>(".slide_contain");
        if (!slideContainer) return;

        const items = slideContainer.querySelectorAll<HTMLElement>(".slide_item");
        setCurrentIndex(0);
        items.forEach((item, i) => {
          item.classList.toggle("is--current", i === 0);
          item.style.transform = "translateX(0px)";
        });

        slideContainer.querySelectorAll<HTMLElement>(".slide_arrow.is--left").forEach(a => a.classList.add("is--disabled-arrow"));
        slideContainer.querySelectorAll<HTMLElement>(".slide_arrow.is--right").forEach(a => a.classList.remove("is--disabled-arrow"));
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      arrows.forEach(arrow => arrow.removeEventListener("click", handleArrowClick));
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, sliderOffset, slideWidth]);

    return (
    <div className="background">
        <section className="section">
            <div className="container">
                <h1>Slider Title</h1>
                <div className="slide_contain">
                    <div className="slide_wrap w-dyn-list">
                        <div role="list" className="slide_list w-dyn-items">
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#a4bfc3" }}>
                                    <h1 className="card_title">
                                        Advanced Transition Interactions in Webflow
                                    </h1>
                                </div>
                            </div>
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#aae0bc" }}>
                                    <h1 className="card_title">Gooey Card Interaction in Webflow</h1>
                                </div>
                            </div>
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#f2fe9a" }}>
                                    <h1 className="card_title">Advanced Menu &amp; Slider Interactions in Webflow</h1>
                                </div>
                            </div>
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#a4bfc3" }}>
                                    <h1 className="card_title">New Responsive Technique for Webflow: Introducing wizardry.</h1>
                                </div>
                            </div>
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#aae0bc" }}>
                                    <h1 className="card_title">Top Five Interactions Designers Struggle to Create in Webflow</h1>
                                </div>
                            </div>
                            <div role="listitem" className="slide_item w-dyn-item">
                                <div className="slide_card" style={{ backgroundColor: "#f2fe9a" }}>
                                    <h1 className="card_title">Easy Letter Animations in Webflow</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide_arrows">
                        <a href="#" className="slide_arrow is--left is--disabled-arrow w-inline-block">
                            <div className="slide_svg is--flip w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 12 12">
                                    <g transform="translate(0, 0)">
                                        <path d="M1,7H8.586L6.293,9.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.416l-4-4A1,1,0,0,0,6.293,2.707L8.586,5H1A1,1,0,0,0,1,7Z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </div>
                        </a>
                        <a href="#" className="slide_arrow is--right w-inline-block">
                            <div className="slide_svg w-embed">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 12 12">
                                <g transform="translate(0, 0)">
                                    <path d="M1,7H8.586L6.293,9.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.416l-4-4A1,1,0,0,0,6.293,2.707L8.586,5H1A1,1,0,0,0,1,7Z" fill="currentColor"></path>
                                </g>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );

}
