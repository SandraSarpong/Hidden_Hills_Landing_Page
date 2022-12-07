import "./propertyStyle.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Carousel, Radio,Image ,Tabs  } from 'antd';


const PropertyDetails = () => {
  const location = useLocation();
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="detailContainer">
        <div className="wraper">
            <div className="left">
                <Carousel autoplay={true} prevArrow={true} nextArrow={true} dotPosition={"right"}>
                    <div >
                        <Image  height={"500px"} width={"100%"} style={{objectFit:"cover", borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                        {/* <Image  height={"500px"} width={"100%"} style={{objectFit:"cover", borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyZWUlMjBob3VzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" /> */}
                    </div>
                    <div >
                        <Image height={"500px"} width={"100%"} style={{objectFit:"cover", borderRadius:"10px"}} src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                    </div>
                    <div >
                        <Image height={"500px"} width={"100%"} style={{objectFit:"cover", borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFwYXJ0bWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                    </div>
                    <div >
                        <Image height={"500px"} width={"100%"} style={{objectFit:"cover", borderRadius:"10px"}}  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="test" />
                    </div>
                    
                </Carousel>
            </div>
            <div className="right">
                <div className="itemName">
                    Item Name
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quam iusto soluta! Voluptatem illo quas facere tempora unde! Laborum molestias blanditiis itaque magnam, non voluptate explicabo provident et eveniet veniam!
                    Pariatur illo modi, voluptates voluptatum et reprehenderit animi. Doloribus, vero nobis a esse quidem consequuntur accusantium pariatur repellat maxime doloremque dignissimos, voluptas delectus porro incidunt impedit fuga repellendus, nulla eum!
                    Asperiores aperiam perferendis explicabo, unde facilis dolores soluta nulla nisi quo minima, impedit, omnis fugiat distinctio! Expedita aliquam et vitae qui perferendis architecto voluptatem veniam! Quia voluptatem accusantium fuga. Facilis.
                </div>
            </div>
           
        </div>
      </div>
        <div className="related">
            <div className="relatedTitle">
                <h2>Related Items</h2>
            </div>
        </div>
    </div>
  );
};

export default PropertyDetails;
