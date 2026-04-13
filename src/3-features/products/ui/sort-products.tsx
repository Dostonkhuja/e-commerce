import { useAppDispatch, useAppSelector } from "@/5-shared/lib/store/hooks.ts";
import { setSort } from "../model/products.slice.ts";
import { selectProductsState } from "../model/products.selectors.ts";

export function SortProducts() {
    const dispatch = useAppDispatch();
    const { order } = useAppSelector(selectProductsState);

    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">
                Sort:
            </span>

            <div className="relative">
                <select
                    value={order}
                    onChange={(event) =>
                        dispatch(
                            setSort({
                                sortBy: "title",
                                order: event.target.value as "asc" | "desc",
                            })
                        )
                    }
                    className="
                        appearance-none
                        px-4 py-2 pr-10
                        rounded-xl
                        border
                        border-gray-200 dark:border-gray-700
                        bg-white dark:bg-gray-900
                        text-gray-800 dark:text-gray-100
                        shadow-sm
                        hover:shadow-md
                        focus:outline-none focus:ring-0
                        focus:ring-black dark:focus:ring-white
                        transition-all
                        cursor-pointer
                    "
                >
                    <option value="asc">A -&gt; Z</option>
                    <option value="desc">Z -&gt; A</option>
                </select>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    v
                </div>
            </div>
        </div>
    );
}
