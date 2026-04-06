import { useEffect, useState } from "react";

export const useCarousel = (length: number, delay = 4000) => {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((i) => (i === length - 1 ? 0 : i + 1));
    };

    const prev = () => {
        setIndex((i) => (i === 0 ? length - 1 : i - 1));
    };

    const goTo = (i: number) => setIndex(i);

    useEffect(() => {
        const id = setInterval(next, delay);
        return () => clearInterval(id);
    }, [length, delay]);

    return { index, next, prev, goTo };
};