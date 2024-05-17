import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [brand,setbrand]=useState('');
  const navigate = useNavigate();

  const brandName = (e) => {
    setbrand(e.target.value)}

    const handleButtonClick = () => {
      navigate(`/product/${brand}`);
    };

  return (
    <>
      <h1>Menu Page</h1>
      <input type="text" placeholder="입력해주세요" value = {brand} onChange={(e) => brandName(e)}/>
      <button onClick={handleButtonClick}>브랜드 페이지로 이동</button>
    </>
  )
};

export default Menu;