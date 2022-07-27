import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Image, Typography, Button } from "antd";
import { product__month } from "../../../Data/Data";
import "./month.css";
const { Title } = Typography;

const Box = styled.div`
  width: 260px;
  height: 400px;
`;
const img = {
  width: "100%",
  height: "200px",
  background: "#F7F7F7",
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Month() {
  return (
    <div>
      {product__month.map((item, index) => (
        <Box key={index}>
          <Image style={img} src={item.img} />
          <h1>{item.info}</h1>
          <p>{item.overol2}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{item.overol1}</span>
            <HeartOutlined />
          </div>
          <Button style={{ width: "100%", margin: "50px 0" }} type="primary">
            <ShoppingCartOutlined /> Primary Button
          </Button>
        </Box>
      ))}
      
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
      ;
    </div>
  );
}
