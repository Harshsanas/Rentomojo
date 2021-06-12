import React from 'react'

export function PrdSideBar({heading, names, productType}) {
    const removeDuplicates = (item) => {
        
    }
    const style = {
        heading:{
            border: "1px solid #E6E6E6",
            marginBottom: 15,
            borderRadius: 5,
            padding: "20px",
            color: "#706969",
            div: {
                marginBottom:"15px"
            },
            content: {
                marginBottom:"8px"
            },
            input: {
                marginRight: "15px",
                color: "#918b8b"
            },
            label: {
                fontSize: 13,
                color:"#706969"
            }
            
        }
    }
    return (
        <div style = {{width: "80%",margin: "100px auto auto 30px"}}>
            <div style = {{width:"100%",height: "100px"}}>
                {/* slider */}
            </div>

            <div style = {style.heading}>
                <div style = {style.heading.div}>{heading}</div>
                {
                    names?.map(item => (
                        <div style = {style.heading.content}>
                            <input type="checkbox" style = {style.heading.input}/>
                            <label style = {style.heading.label}>{item.categName}</label>
                        </div>
                    ))
                }
            </div>

            <div style = {style.heading}>
                <div style = {style.heading.div}>PRODUCT TYPE</div>
                {
                    productType?.map(item => (
                        <div style = {style.heading.content}>
                            <input type="checkbox" style = {style.heading.input}/>
                            <label style = {style.heading.label}>{item.productType}({item.stock})</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


