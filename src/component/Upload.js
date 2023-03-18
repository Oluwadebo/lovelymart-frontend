import React from "react";
import { useState } from "react";
import axios from 'axios';
import { baseUrl } from "./endpoint";

const Upload = () => {
  const [loader, setloader] = useState(false)
  const [file, setfile] = useState("");
  const [product, setproduct] = useState("");
  const [price, setprice] = useState("");
  const [Err, setErr] = useState("")
  const adminId = localStorage.adminId
  const [selectedOption, setSelectedOption] = useState("");

  const getfile = (e) => {
    let myfile = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(myfile)
    reader.onload = () => {
      setfile(reader.result);
    }
  }
  // let value = e.value;
  // let text = e.options[e.selectedIndex].text;
  const handleSelectChange = (e) => {
    let selectedOpt = document.getElementById("selectOptions");
    setSelectedOption(selectedOpt.value);
    console.log(selectedOpt.value);
  };

  const upload = () => {
    if (file != "" && product != "" && price != "" && selectedOption != "") {
      setErr("")
      setloader(prev => true)
      console.log(selectedOption);
      const userdata = { file, product, price, adminId }
      axios.post(`${baseUrl}files`, userdata).then((credentials) => {
        if (credentials) {
          let info = credentials.data.message;
          if (info == "Upload successfuly") {
            setloader(prev => false)
            setErr("Upload successfuly")
            window.location.reload()
          } else {
            setloader(prev => false)
            setErr("Upload failed")
          }
        }
      })
    } else {
      setloader(prev => false)
      if (file == "" && product == "" && price == "" && selectedOption == "") {
        setErr("All input field are required")
      } else if (file == "") {
        setErr("file input field is required")
      } else if (product == "") {
        setErr("product name input field is required")
      } else if (price == "") {
        setErr("product price input field is required")
      } else {
        if (selectedOption == "") {
          setErr("Category input field is required")
        }
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="row  my-5">
          <div className="shadow col-12 px-3 pb-3 asd">
            <h2 className="m-4 text-white">
              <b>
                <i>Product form</i>
              </b>
            </h2>
            <p>
              <b className="text-danger"><marquee className="card">{Err}</marquee></b>
            </p>
            <div>
              <input type="file" className="form-control my-2" onChange={(e) => getfile(e)} accept='image/*' />
              <input type="text" className="form-control my-2" placeholder="Product name" onChange={(e) => setproduct(e.target.value)} />
              <input type="text" className="form-control my-2" placeholder="Product price (add your currency)" onChange={(e) => setprice(e.target.value)} />
              <select id="selectOptions" className="select" value={selectedOption} onChange={(e) => handleSelectChange(e)}>
                <option value="">Select your Category</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <button className="btn form-control py-3 mt-3 asdb" onClick={upload}>Upload
                {loader && (
                  <div className="spin">
                    <div className="loader"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
