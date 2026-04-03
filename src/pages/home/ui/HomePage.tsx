import {ProductList} from "@/widgets/ProductsList";
import {CartDrawer} from "@/widgets/cartDrawer";

const HomePage = () => {

    return <div className="pt-14">
        <CartDrawer/>
        <ProductList/>
    </div>;
};

export default HomePage;