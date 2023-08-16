/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Product from "./Products";
import Header from "./component/CustomHeader/Header";
import SearchInput from "./component/SearchInput/SearchInput";
import { getShoppingData } from "./redux/apiData/ApiSlice";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  console.log(searchQuery, "searchQuery");
  console.log(searchResults, "searchResults");

  //get data from redux store
  const shoppingData = useSelector((state) => state.shoppingData?.todos);

  //create dispatch method
  const dispatch = useDispatch();

  //for get data after compoent render
  useEffect(() => {
    console.log("Fetching shopping data");
    dispatch(getShoppingData());
  }, []);

  const handleInputChange = (event) => {
    // console.log(event.target.value, "event");
    setSearchQuery(event.target.value);
  };

  const performSearch = () => {
    const filteredResults = shoppingData.filter((item) =>
      // (item) => console.log(item.title)
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
    // setShowSearchResults(true);
  };

  const renderedData = useMemo(() => {
    return searchQuery !== "" ? searchResults : shoppingData;
  }, [searchQuery, searchResults, shoppingData]);

  return (
    <>
      {/* <button onClick={ dispatch(getShoppingData())}/> */}
      <div>
        <Header />
        <SearchInput
          onClick={performSearch}
          onChange={handleInputChange}
          inputValue={searchQuery}
        />
      </div>
      <div className="card_container">
        {renderedData &&
          renderedData.map((product, index) => (
            <div key={index}>
              <Product product={product} key={product.id} />
            </div>
          ))}
      </div>
    </>
  );
};
export default Posts;
