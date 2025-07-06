import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { lazy, Suspense } from "react";


const  BlogPage = lazy(() => import( "./pages/BlogPage"))
const  PostDetails = lazy(() => import( "./pages/PostDetails"))
const  ErrorPage = lazy(() => import( "./pages/ErrorPage"))
const  SettingsPage = lazy(() => import( "./pages/SettingsPage"))

function App() {
  return (
    <Suspense fallback={<h2>...Loading</h2>}>
    <Routes>
      <Route path="/" element={<HomePage />} />    
      <Route path="/blog" element={<BlogPage />} />    
      <Route path="/blog/:id" element={<PostDetails />} />    
      <Route path="/settings" element={<SettingsPage />} />    

      <Route path="*" element={<ErrorPage />} />
    </Routes>
    </Suspense>
  );
}

export default App;