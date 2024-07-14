"use client";

import { useEffect, useRef } from "react";

interface EventProps {
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
  slim?: boolean;
  onSize?: (size: { width: number; height: number }) => void;
}

function Event(props: EventProps) {
  const ref = useRef<HTMLLIElement | null>(null);

  const { onSize } = props;

  useEffect(() => {
    if (ref.current && onSize) {
      const width = ref.current.offsetWidth;
      const height = ref.current.offsetHeight;
      onSize({ width, height });
    }
  }, [onSize]);

  return (
    <li ref={ref} className={"event" + (props.slim ? " event_slim" : "")}>
      <button className="event__button">
        <span
          className={`event__icon event__icon_${props.icon}`}
          role="img"
          aria-label={props.iconLabel}
        ></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle && (
          <span className="event__subtitle">{props.subtitle}</span>
        )}
      </button>
    </li>
  );
}

export default Event;
