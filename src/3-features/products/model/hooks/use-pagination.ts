import { useState } from "react";

type Props = {
    initialPage?: number;
};

export const usePagination = ({ initialPage = 1 }: Props = {}) => {
    const [page, setPage] = useState(initialPage);

    const next = () => setPage((p) => p + 1);
    const prev = () => setPage((p) => Math.max(1, p - 1));
    const goTo = (p: number) => setPage(p);

    return {
        page,
        setPage,
        next,
        prev,
        goTo,
    };
};