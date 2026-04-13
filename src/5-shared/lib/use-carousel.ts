import { useEffect, useEffectEvent, useState } from "react";

export const useCarousel = (length: number, delay = 4000) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((i) => (i === length - 1 ? 0 : i + 1));
    };

    const prev = () => {
        setIndex((i) => (i === 0 ? length - 1 : i - 1));
    };

    const goTo = (i: number) => setIndex(i);
    const tick = useEffectEvent(() => {
        next();
    });

    useEffect(() => {
        const id = setInterval(() => {
            tick();
        }, delay);

        return () => clearInterval(id);
    }, [delay]);

    return { index, next, prev, goTo };
};
