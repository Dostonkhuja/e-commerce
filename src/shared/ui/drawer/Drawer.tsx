import clsx from "clsx";

type Props = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    position?: "left" | "right";
    width?: string;
};

const positionMap = {
    left: "left-0",
    right: "right-0",
};

const animationMap = {
    right: {
        open: "translate-x-0",
        closed: "translate-x-full",
    },
    left: {
        open: "translate-x-0",
        closed: "-translate-x-full",
    },
};

export const Drawer = ({
                           open,
                           onClose,
                           children,
                           position = "right",
                           width,
                       }: Props) => {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            {/* overlay */}
            <div
                onClick={onClose}
                className={clsx(
                    "fixed inset-0 bg-black/50 transition-opacity duration-300",
                    open ? "opacity-100 pointer-events-auto" : "opacity-0"
                )}
            />

            {/* panel */}
            <div
                className={clsx(
                    "fixed top-0 h-full bg-white dark:bg-zinc-900 flex flex-col shadow-xl transition-transform duration-300 pointer-events-auto",
                    positionMap[position],
                    width || "w-80",
                    open
                        ? animationMap[position].open
                        : animationMap[position].closed
                )}
            >
                {children}
            </div>
        </div>
    );
};