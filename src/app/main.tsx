import { createRoot } from 'react-dom/client'
// import './styles/reset.css'
// import './styles/global.css'
import './styles/index.css'
import App from './App.tsx'
import {ReduxProvider} from "@/app/providers/ReduxProvider.tsx";

createRoot(document.getElementById('root')!).render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
)
