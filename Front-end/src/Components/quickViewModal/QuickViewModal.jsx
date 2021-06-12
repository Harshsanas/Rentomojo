import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export function QuickViewModal({openModal, setOpenModal, ...restProps}) {
    const [index, setIndex] = React.useState(0);
    const [tenure, setTenure] = React.useState(3);
    const code = "HOME5"
    const {name, ppmfor3months, ppmfor6months, ppmfor12months, deposit, dishcount, image} = restProps;
    const handleTenure = (e) => {
        setTenure(e.target.value);
    }
    const customStyles = {
        content : {
            width: '75%',
            height: 400,
            top: '55%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
        
    };
    const styles = {
        container: {
            display: "flex",
            
        },
        details: {
            display: "flex",
            flexDirection: "column",
            marginLeft:25
        },
        next:{
            border: "none",
            outline: "none",
            cursor: "pointer",
            width: 50, 
            height: 50,
            fontSize: 20,
            borderRadius: 25,
            background: "#ffff",
            fontWeight: 600, 
            transform: "rotate(90deg)",
            position:"absolute",
            top:"45%",
            right: 0,
        },
        prev: {
            border: "none",
            outline: "none",
            cursor: "pointer",
            width: 50, 
            height: 50,
            fontSize: 20,
            borderRadius: 25,
            background: "#ffff",
            fontWeight: "bold", 
            transform: "rotate(-90deg)",
            position:"absolute",
            top:"45%",
            left:0,
            
        }, 
        imgDiv:{
            width: "100%",
            height: "400px"
        },
        img: {
            width: "100%",
            height: "100%"
        }
        
    }
    return (
        <Modal
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
          style={customStyles}
          contentLabel="Example Modal"
          
        >
            <div style = {styles.container}>
                <div style = {{width: "45%",marginRight:"50px", position:"relative"}}>
                    <button disabled = {index === image.length-1} style = {styles.next} onClick = {()=>setIndex(prev => prev + 1)}>^</button>
                    <button disabled = {index === 0} style = {styles.prev} onClick = {()=>setIndex(prev => prev - 1)}>^</button>
                    <div style = {styles.imgDiv}>
                        <img src={image[index]} style ={styles.img} alt="productImage"/>
                    </div>
                </div>
                <div style = {styles.details}>
                    <div style = {{width: "100%",fontSize: 20, fontWeight: "600", marginTop:40}}>{name}</div>

                    <div style = {{display: "flex",
                        justifyContent:"space-between",
                        fontSize: 12, marginTop: 20
                    }}>
                        <div>Tenure</div>
                        <div style = {{color: "rgb(29, 189, 192)"}}>
                            <select onChange = {handleTenure} style ={{border: "none", outline:"none",
                                background: "transparent",
                                color: "rgb(29, 189, 192)"
                        }}>
                                <option value="3">3 months</option>
                                <option value="6">6 months</option>
                                <option value="12">12 months</option>
                            </select>
                        </div>
                    </div>

                    <div style = {{display: "flex",
                        justifyContent:"space-between",
                        border: "1px solid #E6E6E6",
                        width: 400,
                        padding: "20px 10px"
                    }}>
                        <div style = {{display:"flex", flexDirection:"column"}}>
                            <div style = {{fontSize: 9, color: "rgb(113, 113, 113)"}}>Deposit</div>
                            <div style = {{fontSize: 15}}>{deposit}/-</div>
                        </div>
                        <div style = {{display:"flex", flexDirection:"column"}}>
                            <div style = {{fontSize: 9, color: "rgb(29, 189, 192)"}}>Dishcount</div>
                            <div style = {{fontSize: 15, color: "rgb(186, 186, 186)"}}>save {dishcount}%</div>
                        </div>
                        <div>
                            <div style = {{fontSize: 9, color: "rgb(113, 113, 113)"}}>Monthly rent for {tenure} months</div>
                            <div style = {{fontSize: 15}}>{} /mo</div> 
                        </div>
                    </div>

                    <div style = {{display: "flex",
                        flexDirection:"column"
                        
                    }}>
                        <div style = {{fontSize: 12, marginTop:"20px", marginBottom:"5px"}}>Special Offers</div>
                        <div style = {{display: "flex",
                        justifyContent:"space-around",
                        border:"1.5px solid #E6E6E6",
                        borderStyle:"dashed",
                        padding:"15px 20px",
                        alignItems:"center"
                    }}>
                            <div style = {{
                                display: "flex",
                                justifyContent:'center',
                                alignItems:"center"
                            }}>
                                <div style = {{width: 20, height: 20}}>
                                    <img style = {{width: "100%", height: "100%"}} src="https://www.rentomojo.com/public/images/icons/offer-percentage.svg" alt="dishcount"/>
                                </div>
                                
                            </div>
                            <div style = {{display: "flex", flexDirection:"column", flex:"1", marginLeft:"20px"}}>
                                <div style ={{fontSize:11}}>Use code <strong>{code}</strong></div>
                                <div style ={{fontSize:11}}>Get 5% of every month on a minimum...</div>
                                <div style ={{fontSize:11, color: "rgb(29, 189, 192)"}}>Read more</div>
                            </div>
                            <button style  ={{
                                border: "1px solid rgb(29, 189, 192)",
                                color: "rgb(29, 189, 192)",
                                padding: "5px 20px",
                                cursor: "opinter"
                            }}>COPY</button>
                        </div>
                    </div>
                    
                    <div style = {{display: "flex", justifyContent:"space-around", margin:"20px 0"}}>
                        <button style = {{
                            cursor: "pointer",
                            outline: "none",
                            color: "rgb(255, 0, 0)",
                            padding: "20px 30px",
                            border: "1px solid rgb(255, 0, 0)",
                            background: "transparent",
                            borderRadius:5,
                            fontSize:16
                        }}>
                            View Details
                        </button>
                        <button style = {{
                            cursor: "pointer",
                            outline: "none",
                            background: "rgb(255, 0, 0)",
                            padding: "20px 30px",
                            border: "none",
                            color: "#ffff",
                            borderRadius:5,
                            fontSize:16
                        }}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            
        </Modal>
    )
}