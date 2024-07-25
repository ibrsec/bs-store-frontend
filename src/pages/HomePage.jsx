import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import { Box, Grid, Typography } from "@mui/material";
import useProductServices from "../services/useProductServices";
import { useSelector } from "react-redux";
import PaginationComp from "../components/PaginationComp";
// const products = [
//   {
//     title: "TV",
//     description: "Description of the TV product",
//     price: 600,
//     discountPercentage: 20,
//     rating: 70,
//     thumbnail: "https://example.com/image1.jpg",
//   },
//   {
//     title: "TV",
//     description: "Description of the TV product",
//     price: 600,
//     discountPercentage: 20,
//     rating: 70,
//     thumbnail:
//       "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6409/6409643_sd.jpg;maxHeight=640;maxWidth=550",
//   },
//   {
//     title: "TV",
//     description: "Description of the TV product",
//     price: 600,
//     discountPercentage: 20,
//     rating: 70,
//     thumbnail:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzqz4Z7tshdP_jmhIac_fpRnIbvf31iggCQ&s",
//   },
// ];
const HomePage = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const { listProducts } = useProductServices();

  const {products,details,loading} = useSelector(state=> state.product);
  console.log('products homepage', products)
  
  useEffect(() => {
    listProducts({page,search:searchQuery});
  }, [page,searchQuery]);


  return (
    <Box maxWidth={1200} mx="auto">
      <Typography
        fontSize={24}
        fontWeight={500}
        align="center"
        my={5}
        color="darkorange"
      >
        Products
      </Typography>
      <PaginationComp page={page} setPage={setPage} details={details} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <div>
        <Grid my={5} px={2} container spacing={2} justifyContent={"center"}>
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </Grid>
      </div>
    </Box>
  );
};

export default HomePage;
