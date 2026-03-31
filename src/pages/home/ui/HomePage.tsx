import {ProductList} from "@/widgets/Products";
import {CartDrawer} from "@/widgets/cart";

const HomePage = () => {

    return <div className="pt-14">
        <CartDrawer/>
        <ProductList/>
    </div>;
};

export default HomePage;