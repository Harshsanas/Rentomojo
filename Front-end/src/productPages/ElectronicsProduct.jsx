import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductHeader } from '../Components/product/header/ProductHeader';
import { ProductProto } from '../Components/productsProto/ProductProto';

export function ElectronicsProduct(){
    const [productData, setProductData] = React.useState([])
    const {name} = useParams();
    // console.log(name)
    React.useEffect(()=> {
        let id = "";
        
        const getCateg = async () => {
            await axios.get('http://localhost:8080/electronicsCateg')
            .then(res => {
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
            axios.get(`http://localhost:8080/electronics/categ/${id}`)
                .then(res => {
                    setProductData(res.data)
                })
            console.log("id",id);
            
        }
        allData();
    },[])
    const style = {
        marginTop: 60,
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
            <div style={style}>
                <ProductHeader navig = {<><Link to ="/" style = {style.link}>Home</Link>{`${'>'}`}<Link style = {style.navLink} to ="/electronics-on-rent">Electronics</Link></>}/>
            </div>
            <div style = {{display: "flex", width: "90%", margin: "auto"}}>
                <div style = {{width: "25%"}}>
                    {/* filter code */}
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
    );
}