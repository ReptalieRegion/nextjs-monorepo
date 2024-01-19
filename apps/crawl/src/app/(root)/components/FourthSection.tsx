"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import diary from "../../../../public/images/diary.jpg";
import entity from "../../../../public/images/entity.jpg";
import useWindowSize from "../../../hooks/useWindowSize";

export default function FourthSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const [contentClassName, setSectionClassName] = useState("section__wrapper");
  const [rightImageClassName, setRightImageClassName] = useState(
    "third-section__right_image",
  );
  const [leftImageClassName, setLeftImageClassName] = useState(
    "third-section__left_image",
  );

  const { windowInnerWidth } = useWindowSize();

  useEffect(() => {
    const imageElement = imageWrapperRef.current;
    if (imageElement) {
      if (windowInnerWidth < 768) {
        imageElement.style.transform = "";
      }
    }
  }, [windowInnerWidth]);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = sectionRef.current;

      if (targetElement) {
        const elementRect = targetElement.getBoundingClientRect();
        const isOverScroll = elementRect.top < innerHeight;

        if (isOverScroll) {
          setSectionClassName(
            "section__wrapper section__text-wrapper-animation",
          );
          setRightImageClassName(
            "third-section__right_image third-section__right_image_animation",
          );
          setLeftImageClassName(
            "third-section__left_image third-section__left_image_animation",
          );
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    const handleScrollImageWrapper = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom = scrollTop + innerHeight;

      const imageElement = imageWrapperRef.current;
      if (imageElement) {
        const thirdLeftImageBottom =
          window.scrollY + imageElement.getBoundingClientRect()?.bottom;
        if (innerWidth <= 768 && thirdLeftImageBottom <= scrollBottom + 100) {
          const moveX = Math.max(
            0,
            Math.min(1, 100 / (scrollBottom + 100 - thirdLeftImageBottom)),
          );
          imageElement.style.transform = `translate3d(calc(((650px - 100vw) * ${moveX}) - (650px - 100vw)), 0px, 0px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollImageWrapper);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollImageWrapper);
    };
  }, []);

  return (
    <section ref={sectionRef} className="third-section">
      <div id="third-section-content" className={contentClassName}>
        <div className="section-text__wrapper">
          <h1 id="fourth-h1" className="section-h1-font">
            다이어리
          </h1>
          <h2 className="section-h2-font">
            나의 희귀동물,
            <br />
            쉽게 관리하고
            <br />
            메모 해요
          </h2>
        </div>
        <div
          ref={imageWrapperRef}
          id="third-section-image"
          className="third-section__image_wrapper"
        >
          <div id="third-section-right-image" className={rightImageClassName}>
            <Image
              src={entity}
              alt="댓글 이미지"
              id="right-image"
              className="third-section__image"
              fill
            />
          </div>
          <div id="third-section-left-image" className={leftImageClassName}>
            <Image
              src={diary}
              alt="커뮤니티 이미지"
              id="left-image"
              className="third-section__image"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}
