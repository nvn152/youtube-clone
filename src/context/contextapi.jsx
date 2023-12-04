import React, { createContext, useState, useEffect, useContext } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";

const Context = createContext();
function AppContext({ children }) {
  const [loading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("home");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  function fetchSelectedCategoryData(query) {
    setIsLoading(true);
    fetchFromApi(`${query}`).then(({ data, filters }) => {
      console.log(data);
      setSearchResults(data);
      setIsLoading(false);
    });
  }

  const contextValue = {
    loading,
    setIsLoading,
    searchResults,
    setSelectedCategory,
    selectedCategory,
    mobileMenu,
    setMobileMenu,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

function useVideo() {
  const context = useContext(Context);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { AppContext, useVideo };
