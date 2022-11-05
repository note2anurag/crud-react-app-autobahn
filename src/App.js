import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from './pages/AddPost';
import Dashboard from './pages/Dashboard';
import NotFound from "./pages/NotFound";
import EditPost from "./pages/EditPost";
import { getAllPosts } from "./utils/services";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit" element={<EditPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
