import { Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import AdminProductCard from './AdminProductCard'
import useProductServices from '../services/useProductServices'
import { useSelector } from 'react-redux'
import PaginationComp from './PaginationComp'
import SearchBar from './SearchBar'
import ProductModal from './ProductModal'
import useCategoryServices from '../services/useCategoryServices'
const  products = [1,2]
const AdminProducts = () => {
    const [page, setPage] = useState(1);
    const [editItem, setEditItem] = useState();

    const [searchQuery, setSearchQuery] = useState("");
    const [open, setOpen] = useState(false);


    const { listProducts,  } = useProductServices();
    const { listCategories,  } = useCategoryServices();
  
    const {products,details,loading} = useSelector(state=> state.product);
    console.log('products homepage', products)
    
    useEffect(() => {
        listProducts({page,search:searchQuery});
        listCategories({limit:1000})
      }, [page,searchQuery]);




  
  
    //   const { listCategories,deleteCategory } = useCategoryServices();
    
    //   const {categories} = useSelector(state=> state.category);
    //   console.log('categories=', categories)
    //   console.log(editItem);
    //   useEffect(() => {
    //       listCategories({limit:"1000"});
    //     }, []);




  return (
    <div>
        <Button variant="contained" color='warning' onClick={()=>setOpen(true)}>Create new Product</Button>
        <ProductModal open={open} setOpen={setOpen} editItem={editItem} setEditItem={setEditItem}/>
       <div>

      <PaginationComp page={page} setPage={setPage} details={details} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Grid my={5} px={2} container spacing={2} justifyContent={"center"}>
          {products?.map((product) => (
            <AdminProductCard key={product._id} product={product} setOpen={setOpen} setEditItem={setEditItem} />
          ))}
        </Grid>
      </div>
    </div>
  )
}

export default AdminProducts