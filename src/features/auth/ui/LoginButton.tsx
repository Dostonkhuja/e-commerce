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

        bg-white text-gray-900
        dark:bg-gray-900 dark:text-white

        border border-gray-200 dark:border-gray-700

        hover:bg-gray-100 dark:hover:bg-gray-800

        active:scale-95
        transition
      "
        >
            Login
        </button>
    );
}