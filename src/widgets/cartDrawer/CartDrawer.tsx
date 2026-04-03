import {Drawer} from "@/shared/ui/drawer/Drawer";

import {CartDrawerHeader} from "./CartDrawerHeader";
import {CartDrawerBody} from "./CartDrawerBody";
import {CartDrawerFooter} from "./CartDrawerFooter";
import {useCartDrawer} from "@/features/cart";

export const CartDrawer = () => {
    const {isOpen, close} = useCartDrawer();

    return (
        <Drawer
            open={isOpen}
            onClose={close}
            position="left"
            width="w-w-full max-w-2xl"
        >
            <CartDrawerHeader />
            <CartDrawerBody />
            <CartDrawerFooter />
        </Drawer>
    );
};