import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/User.Context.jsx'
import { BlogProvider } from './context/Blog.Context.jsx'

createRoot(document.getElementById('root')).render(
    /*   <StrictMode> */
    <UserProvider>
        <BlogProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </BlogProvider>
    </UserProvider>
    /*   </StrictMode>, */
)
