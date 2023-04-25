import React from "react";
import Sidebar from "../Layout/Sidebar";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Header from "../Layout/Header";

function AddProduct() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3,marginTop:'70px'}}>
          <h1>AddProduct</h1>
        </Box>
      </Box>
    </>
  );
}

export default AddProduct;
