import React from "react";
import { TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useState } from "react";

const InsertScreen = () => {

  const [keyboard , setKeyboard] = useState({
    name:"",
    price:"",
    brand:"",
    description:"",
    resolution:"",
    picture:"",
    size:""
  })

  async function submitHandler(e)
  {
    e.preventDefault();
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/screens/insertScreen",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(keyboard)
    })

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div style={{ padding: "1rem", width: "40%" }}>
        <form onSubmit={submitHandler}>
          <TextField
            label="screen Name"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.name}
            onChange={(e)=>{setKeyboard({...keyboard , name:e.target.value})}}
          />
          <TextField
            label="Price : 1000dt"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.price}
            onChange={(e)=>{setKeyboard({...keyboard , price:e.target.value})}}
          />

          <TextField
            label="Brand : Dell | Redragon | HP | Samsung"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.brand}
            onChange={(e)=>{setKeyboard({...keyboard , brand:e.target.value})}}
          />

          <TextField
            label="Resolution : HD | Full HD | QHD | 4k"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.resolution}
            onChange={(e)=>{setKeyboard({...keyboard , resolution:e.target.value})}}
          />

          <TextField
            label="size : 21 | 24 | 27 | 32"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.size}
            onChange={(e)=>{setKeyboard({...keyboard , size:e.target.value})}}
          />

          <TextField
            label="Description"
            fullWidth
            sx={{ mb: 1 }}
            multiline
            minRows={4}
            value={keyboard.description}
            onChange={(e)=>{setKeyboard({...keyboard , description:e.target.value})}}
          />

          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => {setKeyboard({...keyboard , picture:base64}) ; console.log(base64) }}
          />

          <br />

          <Button
            variant="contained"
            sx={{ mt: 1 }}
            type="submit"
          >
            Insert
          </Button>
        </form>
      </div>
    </>
  );
}

export default InsertScreen;