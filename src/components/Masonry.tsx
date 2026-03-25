"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { gsap } from "gsap";
import styles from "./Masonry.module.css";

type MasonryItem = {
  id: string;
  img: string;
  url: string;
  height: number;
};

type MasonryProps = {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: "top" | "bottom" | "left" | "right" | "center" | "random";
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  horizontalDrift?: boolean;
  autoScrollLeft?: boolean;
  autoScrollUp?: boolean;
  extraColumns?: number;
  autoScrollDuration?: number;
  columnConfig?: [number, number, number, number];
};

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = useCallback(() => {
    if (typeof window === "undefined") return defaultValue;
    const index = queries.findIndex((q) => window.matchMedia(q).matches);
    return values[index] ?? defaultValue;
  }, [defaultValue, queries, values]);

  const [value, setValue] = useState(get);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = () => setValue(get());
    const mediaQueries = queries.map((q) => window.matchMedia(q));

    mediaQueries.forEach((mq) => mq.addEventListener("change", handler));
    return () => mediaQueries.forEach((mq) => mq.removeEventListener("change", handler));
  }, [get, queries]);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        }),
    ),
  );
};

export default function Masonry({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  horizontalDrift = true,
  autoScrollLeft = false,
  autoScrollUp = false,
  extraColumns = 1,
  autoScrollDuration = 18,
  columnConfig = [5, 4, 3, 2],
}: MasonryProps) {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)", "(min-width:400px)"],
    columnConfig,
    1,
  );

  const [containerRef, { width, height }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);

  const getInitialPosition = useCallback((item: { x: number; y: number; w: number; h: number }) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;

    if (animateFrom === "random") {
      const directions = ["top", "bottom", "left", "right"] as const;
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case "top":
        return { x: item.x, y: -200 };
      case "bottom":
        return { x: item.x, y: window.innerHeight + 200 };
      case "left":
        return { x: -200, y: item.y };
      case "right":
        return { x: window.innerWidth + 200, y: item.y };
      case "center":
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }, [animateFrom, containerRef]);

  useEffect(() => {
    preloadImages(items.map((i) => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo(() => {
    if (!width) return [];

    const visibleColumns = Math.max(1, columns);
    const layoutColumns = Math.max(visibleColumns, visibleColumns * extraColumns);
    const colHeights = new Array(layoutColumns).fill(0);
    const columnWidth = width / visibleColumns;

    return items.map((child) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const h = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += h;

      return { ...child, x, y, w: columnWidth, h };
    });
  }, [columns, items, width, extraColumns]);

  const panDistance = useMemo(() => {
    if (!grid.length || !width) return 0;
    const maxRight = Math.max(...grid.map((item) => item.x + item.w));
    return Math.max(0, maxRight - width);
  }, [grid, width]);

  const panDistanceY = useMemo(() => {
    if (!grid.length || !height) return 0;
    const maxBottom = Math.max(...grid.map((item) => item.y + item.h));
    return Math.max(0, maxBottom - height);
  }, [grid, height]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = {
        x: item.x,
        y: item.y,
        width: item.w,
        height: item.h,
      };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        const initialState = {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: "blur(10px)" }),
        };

        gsap.fromTo(selector, initialState, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: "blur(0px)" }),
          duration: 0.8,
          ease: "power3.out",
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, {
          ...animationProps,
          duration,
          ease,
          overwrite: "auto",
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, blurToFocus, duration, ease, getInitialPosition]);

  useEffect(() => {
    if (!containerRef.current) return;
    const containerEl = containerRef.current;

    if (autoScrollLeft && panDistance > 0) {
      const tween = gsap.fromTo(
        containerEl,
        { x: 0 },
        {
          x: -panDistance,
          duration: autoScrollDuration,
          ease: "none",
          repeat: -1,
        },
      );

      return () => {
        tween.kill();
        gsap.set(containerEl, { x: 0 });
      };
    }

    if (autoScrollUp && panDistanceY > 0) {
      const tween = gsap.fromTo(
        containerEl,
        { y: 0 },
        {
          y: -panDistanceY,
          duration: autoScrollDuration,
          ease: "none",
          repeat: -1,
        },
      );

      return () => {
        tween.kill();
        gsap.set(containerEl, { y: 0 });
      };
    }

    if (!horizontalDrift) return;

    const tween = gsap.to(containerEl, {
      x: 18,
      duration: 3.8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tween.kill();
      gsap.set(containerEl, { x: 0 });
    };
  }, [horizontalDrift, autoScrollLeft, autoScrollUp, panDistance, panDistanceY, autoScrollDuration, containerRef]);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>, item: { id: string }) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: hoverScale,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(`.${styles.colorOverlay}`);
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.3,
          duration: 0.3,
        });
      }
    }
  };

  const handleTiltMove = (e: MouseEvent<HTMLDivElement>, item: { id: string }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const maxTilt = 8;
    const rotateY = (px - 0.5) * maxTilt * 2;
    const rotateX = (0.5 - py) * maxTilt * 2;

    gsap.to(`[data-key="${item.id}"]`, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      transformOrigin: "center center",
      duration: 0.22,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>, item: { id: string }) => {
    const element = e.currentTarget;
    const selector = `[data-key="${item.id}"]`;

    if (scaleOnHover) {
      gsap.to(selector, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(selector, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    if (colorShiftOnHover) {
      const overlay = element.querySelector(`.${styles.colorOverlay}`);
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
        });
      }
    }
  };

  return (
    <div ref={containerRef} className={styles.list}>
      {grid.map((item) => (
        <div
          key={item.id}
          data-key={item.id}
          className={styles.itemWrapper}
          onMouseEnter={(e) => handleMouseEnter(e, item)}
          onMouseMove={(e) => handleTiltMove(e, item)}
          onMouseLeave={(e) => handleMouseLeave(e, item)}
        >
          <div className={styles.itemImg} style={{ backgroundImage: `url(${item.img})` }}>
            {colorShiftOnHover && <div className={styles.colorOverlay} />}
          </div>
        </div>
      ))}
    </div>
  );
}
