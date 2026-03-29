import {Products} from "../../../entitys/products";
import {ThemeToggle} from "../../../shared/ui";

const HomePage = () => {
    return <div>
        <ThemeToggle/>
        <Products />
    </div>;
};

export default HomePage;