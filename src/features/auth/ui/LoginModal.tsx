import { useLogin } from "../index";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const inputClassName = `
    w-full px-4 py-2 rounded-lg border
    bg-white text-gray-800
    dark:bg-gray-900 dark:text-gray-100
    dark:border-gray-700
    focus:outline-none focus:ring-2 focus:ring-gray-400
    dark:focus:ring-gray-600
    transition-colors duration-300
`;

export function LoginModal({ open, setOpen, setIsAuth }: Props) {
    const {
        username,
        password,
        loading,
        error,
        onChangeUsername,
        onChangePassword,
        handleSubmit,
    } = useLogin({ open, setOpen, setIsAuth })

    if (!open) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center bg-black/60 p-4 overflow-y-auto">

            <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl border dark:border-gray-800">

                {/* header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Login
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="
                            w-8 h-8 flex items-center justify-center
                            rounded-lg
                            text-gray-600 dark:text-gray-300
                            hover:bg-gray-100 dark:hover:bg-gray-800
                            transition
                        "
                    >
                        ✕
                    </button>
                </div>

                {/* form */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        value={username}
                        onChange={onChangeUsername}
                        placeholder="emilys"
                        className={inputClassName}
                    />

                    <input
                        value={password}
                        onChange={onChangePassword}
                        placeholder="emilyspass"
                        type="password"
                        className={inputClassName}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full px-4 py-2 rounded-lg
                            bg-gray-900 text-white
                            dark:bg-white dark:text-gray-900

                            hover:opacity-90
                            active:scale-95

                            transition
                            disabled:opacity-50 disabled:cursor-not-allowed
                        "
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                </form>

                {error && (
                    <p className="mt-4 text-sm text-red-500 dark:text-red-400">
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}