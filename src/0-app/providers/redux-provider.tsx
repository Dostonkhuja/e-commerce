import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/0-app/store/store.ts";

type Props = {
    children: React.ReactNode;
};

export const ReduxProvider = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
