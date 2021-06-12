import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductProto } from '../Components/productsProto/ProductProto';

export function FurnitureProduct(){
    const [productData, setProductData] = React.useState([])
    const {name} = useParams();
    React.useEffect(()=> {
        let categName = "", id = "";
        if(name === "Bedroom") {
            categName = name;
        } else if(name === "LivingRoom") {
            categName = "Living Room"
        } else if(name === "WorkFromHome") {
            categName = "Work From Home"
        } else if(name === "Kitchen&Dinning") {
            categName = "Kitchen & Dinning"
        } else if(name === "BabyFurniture") {
            categName = "Baby Furniture"
        }
        console.log(categName)
        const getCateg = async () => {
            await axios.get('http://localhost:8080/furnitureCateg')
            .then(res => {
                res.data?.forEach(item => {
                    if(item.categName === categName){
                        id = item._id;
                    }
                })
            });
            return id;
        }
        const allData = async () => {
            const id = await getCateg();
            axios.get(`http://localhost:8080/furniture/categ/${id}`)
                .then(res => {
                    setProductData(res.data)
                })
            console.log("id",id);
            
        }
        allData();
    },[])
    const style = {
        container: {
            marginTop: 60,
            
        },
        
        link : {
            textDecoration: "none",
            color: "#9E9E9E"

        },
        navLink: {
            color:"#6FD3D5",
            textDecoration: "none"
        },
        products: {
            marginTop: 100,
            width: "65%",
            display: "grid",
            gridTemplateRows: "auto",
            gridTemplateColumns: "auto auto auto",
            gap: "20px"
        }
    }
    return (
        <>
            <div style={style.container}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/furniture-on-rent">Furniture</Link></>}/>
            </div>
            <div style = {{display: "flex", width: "90%", margin: "auto"}}>
                <div style = {{width: "25%"}}>

                </div>
                <div style = {style.products}>
                    {
                        productData?.map(item=> (
                            <ProductProto key = {item._id} {...item}/>
                        ))
                    }
                </div>
            </div>
            
        </>
    )
}