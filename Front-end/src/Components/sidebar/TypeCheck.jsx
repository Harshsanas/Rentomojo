import React from 'react';

export function TypeCheck({name, typeChange}){
    
    const handleChange = (e) => {
        typeChange(e.target.checked, name[0])
        
    }
    const style = {
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
    return (
        <div style = {style.content}>
            <input type="checkbox" checked = {name[1]} name = {name[0]} onChange = {handleChange} style = {style.input} />
            <label style = {style.label}>{name}</label>
        </div>
    )
}