import { Drawer } from "@/5-shared/ui";

import {useCartDrawer} from "@/2-widgets/cart-drawer/hooks/use-cart-drawer.ts";

import {CartDrawerHeader} from "./cart-drawer-header.tsx";
import {CartDrawerBody} from "./cart-drawer-body.tsx";
import {CartDrawerFooter} from "./cart-drawer-footer.tsx";


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
