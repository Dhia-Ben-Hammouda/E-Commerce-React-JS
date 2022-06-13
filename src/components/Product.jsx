import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { getProductById } from "../redux/actions/productActions";
import { useEffect } from "react";

const Product = ()=>{
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(()=>{
    dispatch(getProductById(id));
  } , [dispatch]);

  const product = useSelector(state => state.productReducer.product);
  const loading = useSelector(state => state.productReducer.loading);

  return(
    <>
    
    </>
  );
}

export default Product;