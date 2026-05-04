import "./App.css";
import ProductCard from "./ProductCard";

import laptopImg from "./images/laptop.png";
import phoneImg from "./images/phone.png";
import headphonesImg from "./images/headphones.png";
import keyboardImg from "./images/keyboard.png";
import mouseImg from "./images/mouse.png";
import monitorImg from "./images/monitor.png";
import cameraImg from "./images/camera.png";
import watchImg from "./images/watch.png";
import speakerImg from "./images/speaker.png";
import tabletImg from "./images/tablet.png";

function App() {
  const products = [
    {
      name: "Laptop",
      image: laptopImg,
      price: "$899.99",
      available: true
    },
    {
      name: "Smart Phone",
      image: phoneImg,
      price: "$699.99",
      available: true
    },
    {
      name: "Headphones",
      image: headphonesImg,
      price: "$129.99",
      available: false
    },
    {
      name: "Keyboard",
      image: keyboardImg,
      price: "$59.99",
      available: true
    },
    {
      name: "Mouse",
      image: mouseImg,
      price: "$29.99",
      available: true
    },
    {
      name: "Monitor",
      image: monitorImg,
      price: "$199.99",
      available: false
    },
    {
      name: "Camera",
      image: cameraImg,
      price: "$449.99",
      available: true
    },
    {
      name: "Smart Watch",
      image: watchImg,
      price: "$149.99",
      available: true
    },
    {
      name: "Speaker",
      image: speakerImg,
      price: "$89.99",
      available: false
    },
    {
      name: "Tablet",
      image: tabletImg,
      price: "$329.99",
      available: true
    }
  ];

  return (
    <div className="App">
      <h1 className="title">Homework 6 Product Listing</h1>

      <section className="productContainer">
        {products.map(function(product, index) {
          return (
            <ProductCard
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              available={product.available}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;