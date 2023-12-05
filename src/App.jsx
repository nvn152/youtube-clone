import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

import { AppContext, useVideo } from "./context/contextapi";
function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route
              path="/searchResult/:searchQuery"
              element={<SearchResult />}
            />
            <Route path="/shorts" element="shorts section" />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
