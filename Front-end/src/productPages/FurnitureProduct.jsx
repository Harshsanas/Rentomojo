import React from 'react';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductProto } from '../Components/productsProto/ProductProto';
import { PrdSideBar } from '../Components/sidebar/PrdSideBar';
import {v4 as uuid} from 'uuid';

const categ = {
    bedroom:false,
    livingRoom: false,
    workFromHome: false,
    kitchenDining: false,
    babyFurniture: false
}
export function FurnitureProduct(){
    const [productData, setProductData] = React.useState([])
    const [category, setCategory] = React.useState([])
    const [check, setCheck] = React.useState(categ)
    const productType = [
        "Mattresses",
        "Beds",
        "Wardrobe & Organizer",
        "Bedside Tables",
        "Chest of Drawers"
    ]
    let {name} = useParams();
    let catName = name;
    
    let id = "";
    const getCateg = async () => {
        await axios.get('http://localhost:8080/furnitureCateg')
        .then(res => {
            setCategory(res.data)
            res.data?.forEach(item => {
                if(item.categName === catName){
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
    },[catName]);
    const handleChange = (e) => {
        const {name, checked} = e.target;
        setCheck({...check, [e.target.name]: e.target.checked});
        if(checked) {
            if(name === "bedroom") {
                catName = "Bedroom"
            } else if(name === "livingRoom") {
                catName = "Living Room"
            } else if(name === "kitchenDining") {
                catName = "Kitchen & Dinning"
            } else if(name === "babyFurniture") {
                catName = "Baby Furniture"
            } else if (name === "workFromHome") {
                catName = "Work From Home"
            }
        } else {
            
        }
        console.log(catName)
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
        },
        heading:{
            border: "1px solid #E6E6E6",
            marginBottom: 15,
            borderRadius: 5,
            padding: "20px",
            color: "#706969",
        },
        div: {
            marginBottom:"15px"
        },
        content: {
            marginBottom:"8px"
        },
        input: {
            marginRight: "40px",
            color: "#918b8b",
            
        },
        label: {
            fontSize: 13,
            color:"#706969"
        }
        
        
    }
    return (
        <>
            <div style={style.container}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/furniture-on-rent">Furniture</Link></>}/>
            </div>
            <div style = {{display: "flex", width: "90%", margin: "auto"}}>
                <div style = {{width: "20%", marginTop: 100, marginRight:30}}>
                    <div style = {style.heading}>
                        <div style = {style.div}>ROOMS</div>
                        <div style = {style.content}>
                            <input type="checkbox" name="bedroom" checked = {check.bedroom} style = {style.input} onClick = {handleChange} />
                            <label style = {style.label}>Bedroom</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="livingRoom" checked = {check.livingRoom} style = {style.input} onClick = {handleChange} />
                            <label style = {style.label}>Living Room</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="kitchenDining" checked = {check.kitchenDining} style = {style.input} onClick = {handleChange} />
                            <label style = {style.label}>Kitchen & Dining</label>
                        </div>
                        <div style = {style.content}>
                            <input type="checkbox" name="babyFurniture" checked = {check.babyFurniture} style = {style.input} onClick = {handleChange} />
                            <label style = {style.label}>Baby Furniture</label>
                        </div>
                        <div>
                            <input type="checkbox" name="workFromHome" checked = {check.workFromHome} style = {style.input} onClick = {handleChange} />
                            <label style = {style.label}>Work From Home</label>
                        </div>
                    </div>
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