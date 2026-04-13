import { useLogin } from "@/3-features/auth/model/hooks/use-login.ts";

type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onSuccess: () => void;
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

export function LoginModal({ open, setOpen, onSuccess }: Props) {
    const {
        username,
        password,
        loading,
        error,
        onChangeUsername,
        onChangePassword,
        handleSubmit,
    } = useLogin({ open, setOpen, onSuccess });

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/60 p-4 md:items-center">
            <div className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl border bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Login
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="
                            flex h-8 w-8 items-center justify-center
                            rounded-lg
                            text-gray-600 dark:text-gray-300
                            transition
                            hover:bg-gray-100 dark:hover:bg-gray-800
                        "
                    >
                        X
                    </button>
                </div>

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
                            w-full rounded-lg px-4 py-2
                            bg-gray-900 text-white
                            dark:bg-white dark:text-gray-900
                            transition
                            hover:opacity-90
                            active:scale-95
                            disabled:cursor-not-allowed disabled:opacity-50
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
    );
}
