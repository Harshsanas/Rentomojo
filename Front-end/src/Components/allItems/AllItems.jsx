import React from 'react'
import axios from 'axios';
import { ProductProto } from '../productsProto/ProductProto';

export function AllItems() {
    const [products, setProducts] = React.useState([]);
    const [productIndex, setProductIndex] = React.useState(1)
    React.useEffect(() => {
        axios.get('http://localhost:8080/allProducts')
            .then(res=>setProducts(res.data))
            .catch(err => console.log(err.message));
    },[])
    const style = {
        conatiner:{
            display:"flex",
            justifyContent:"space-around",
            overflow:"hidden"
        },
        button:{
            width:40,
            height: 40,
            border:"1px solid grey",
            borderRadius:20,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            fontSize: 30,
            fontWeight: "600",
            margin:5,
            cursor:"pointer",
            outline:"none",
            background:"transparent"
        },
        content: {
            display:"flex",

        }
    }
    return (
        <div style = {{width:"100%"}}>
            <div style ={{textAlign:"right", margin:"0 auto 20px", display:"flex"}}>
                <button style = {style.button} disabled = {productIndex === 1} onClick = {() => setProductIndex(prev=>prev-1)}>{"<"}</button>
                <button style = {style.button} disabled = {productIndex*4 === products.length} onClick = {() => setProductIndex(prev=>prev+1)}>{">"}</button>
            </div>

            <div style = {style.content}>
                {
                    products?.map((item, idx)=>{
                        if(idx < (productIndex) * 4 && idx >= (productIndex - 1) * 4)
                            return <ProductProto key = {item._id} {...item}/>})
                }
            </div>
        </div>
    )
}
