import { useSelectedProduct } from "@/3-features/products";
import { ProductList } from "@/2-widgets/products-list";
import { ProductDrawer } from "@/2-widgets/product-drawer";
import { CartDrawer } from "@/2-widgets/cart-drawer";
import { Carousel } from "@/5-shared/ui";
import {CategoriesList} from "@/2-widgets/categories-list";

const HomePage = () => {
    const { selectedProduct, setSelectedProduct } = useSelectedProduct();

    return (
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors">

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

                    <CartDrawer />

                    <ProductDrawer
                        open={selectedProduct !== null}
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />

                </div>
            </main>
        </div>
    );
};

export default HomePage;
