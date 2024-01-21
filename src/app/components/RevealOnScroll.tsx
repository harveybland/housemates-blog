"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  name,
  postTitle,
}: {
  name: string;
  postTitle: string;
}) {
  const [loadProfile, setProfile] = useState(false);
  const observedElementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px", // No margin
      threshold: 0.5, // Trigger when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProfile(true);
        } else if (!entry.isIntersecting) {
          setProfile(false);
        }
      });
    }, options);

    if (observedElementRef.current) {
      observer.observe(observedElementRef.current);
    }

    return () => {
      if (observedElementRef.current) {
        observer.unobserve(observedElementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={observedElementRef}
      className="fixed top-0 left-0 right-0 flex justify-center"
    >
      {loadProfile && (
        <div className=" max-w-screen-sm m-auto bg-white rounded-b p-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,.1)] fadedown">
          <p>{name}</p>
          <p>{postTitle}</p>
        </div>
      )}
    </div>
  );
}
