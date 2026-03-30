import type { MouseEventHandler } from "react";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export function LoginButton({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="
                px-4 py-1.5 text-sm
                rounded-lg

                bg-gray-900 text-white
                dark:bg-white dark:text-gray-900

                hover:opacity-90
                active:scale-95

                transition
            "
        >
            Login
        </button>
    )
}