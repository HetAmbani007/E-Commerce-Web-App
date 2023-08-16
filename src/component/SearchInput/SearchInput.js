import React from "react";
import { Button } from "react-bootstrap";

const SearchInput = ({ placeHolder, onChange, onClick, value }) => {
  // const handleInputChange = (event) => {
  //   console.log(event, "event");
  //   setSearchQuery(event.target.value);
  // };

  // const performSearch = () => {
  //   const filteredResults = data.filter((item) =>
  //     item.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setSearchResults(filteredResults);
  // };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f55c47",
        flexDirection: "row",
        justifyContent: "center",
        padding: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input
        type="text"
        placeholder={placeHolder}
        style={{
          width: "400px",
          padding: "8px",
          borderRadius: "8px",
          border: "none",
          outline: "none",
          backgroundColor: "#fff",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
        onChange={onChange}
        value={value}
      />
      {/* <button
        style={{
          width: "100px",
          marginLeft: 10,
          borderRadius: 10,
          borderColor: "white",
        }}
      >
        Search
      </button> */}
      <Button style={{ marginLeft: 10 }} onClick={onClick}>
        Search
      </Button>
    </div>
  );
};
export default SearchInput;
