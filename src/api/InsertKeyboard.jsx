import React from "react";
import { TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useState } from "react";

const InsertKeyboard = () => {

  const [keyboard , setKeyboard] = useState({
    name:"",
    price:"",
    brand:"",
    description:"",
    mechanical:"",
    picture:"",
    wireless:""
  })

  async function submitHandler(e)
  {
    e.preventDefault();
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/keyboards/insertKeyboard",{
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
            label="keyboard Name"
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
            label="Brand : Dell | Redragon | HP"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.brand}
            onChange={(e)=>{setKeyboard({...keyboard , brand:e.target.value})}}
          />

          <TextField
            label="Mechanical : Yes | No"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.mechanical}
            onChange={(e)=>{setKeyboard({...keyboard , mechanical:e.target.value})}}
          />

          <TextField
            label="Wirelesss : Yes | No"
            fullWidth
            sx={{ mb: 1 }}
            value={keyboard.wireless}
            onChange={(e)=>{setKeyboard({...keyboard , wireless:e.target.value})}}
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

export default InsertKeyboard;