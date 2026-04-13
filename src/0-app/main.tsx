import { createRoot } from "react-dom/client";
import { ReduxProvider } from "@/0-app/providers/redux-provider.tsx";
import App from "./app.tsx";

import "@/0-app/styles/index.css";

createRoot(document.getElementById("root")!).render(
    <ReduxProvider>
        <App />
    </ReduxProvider>
);
