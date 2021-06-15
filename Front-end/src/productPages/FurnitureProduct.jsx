import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductProto } from '../Components/productsProto/ProductProto';
import { PrdSideBar } from '../Components/sidebar/PrdSideBar';

export function FurnitureProduct(){
    const [productData, setProductData] = React.useState([])
    const [category, setCategory] = React.useState([])
    const productType = [
        ["Mattresses", false],
        ["Beds", false],
        ["Wardrobe & Organizer", false],
        ["Bedside Tables", false],
        ["Chest of Drawers", false]
    ]
    const {name} = useParams();
    // console.log(name)
    
    let id = "";
    const getCateg = async () => {
        await axios.get('http://localhost:8080/furnitureCateg')
        .then(res => {
            setCategory(res.data)
            res.data?.forEach(item => {
                if(item.categName === name){
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
        // console.log("id",id);
        
    }
    React.useEffect(()=> {
        allData();
    },[])
    const handleTypeChange = (checked, type) => {
        // console.log("checkded", checked);
        productType.forEach(item=>{
            if(item[0] === type){
                item[1] = checked
                console.log(item[0])
            }
            console.log(item[1]);
        });
        
        if(checked) {
            
            const updatedData = productData?.filter(item => item.productType === type) 
            setProductData(updatedData)
        } else {
            allData();
        }

    }
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
                    <PrdSideBar names = {category} heading = "ROOMS" productType = {productType} handleTypeChange = {handleTypeChange}  />
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