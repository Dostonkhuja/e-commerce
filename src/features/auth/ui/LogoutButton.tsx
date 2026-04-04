type Props = {
    onLogout: () => void;
};

export const LogoutButton = ({ onLogout }: Props) => {
    return (
        <button
            onClick={onLogout}
            className="
                px-3 py-1 text-xs
                rounded-lg

                bg-red-500 text-white
                hover:bg-red-600

                active:scale-95
                transition
            "
        >
            Logout
        </button>
    );
};