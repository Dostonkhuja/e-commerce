import { ProductList } from "@/widgets/ProductsList";
import { CartDrawer } from "@/widgets/cartDrawer";
import { Carousel } from "@/shared/ui";
import {CategoriesList} from "@/widgets/categoriesList";

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">

            <CartDrawer />

            <main className="pt-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">

                    <section>
                        <Carousel />
                    </section>

                    <section>
                        <CategoriesList />
                    </section>

                    <section>
                        <ProductList />
                    </section>

                </div>
            </main>
        </div>
    );
};

export default HomePage;