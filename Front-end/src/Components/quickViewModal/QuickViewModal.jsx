import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export function QuickViewModal({openModal, setOpenModal, ...restProps}) {
    const code = "HOME5"
    const {name, ppmfor3months, ppmfor6months, ppmfor12months, deposit, dishcount, image} = restProps;
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
                <div style = {{width: "50%"}}>
                    
                </div>
                <div style = {styles.details}>
                    <div style = {{width: "100%",fontSize: 20, fontWeight: "600", marginTop:60}}>{name}</div>

                    <div style = {{display: "flex",
                        justifyContent:"space-between",
                        fontSize: 12, marginTop: 20
                    }}>
                        <div>Tenure</div>
                        <div>12 months</div>
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
                            <div style = {{fontSize: 9, color: "rgb(113, 113, 113)"}}>Monthly rent for 12 months</div>
                            <div style = {{fontSize: 15}}>{ppmfor12months} /mo</div>
                        </div>
                    </div>

                    <div style = {{display: "flex",
                        flexDirection:"column"
                        
                    }}>
                        <div style = {{fontSize: 12}}>Special Offers</div>
                        <div style = {{display: "flex",
                        justifyContent:"space-between",
                        border:"1px solid #E6E6E6",
                        borderStyle:"dashed"
                    }}>
                            <div style = {{
                                display: "flex",
                                justifyContent:'center',
                                alignItems:"center"
                            }}>
                                <div style = {{width: 30, height: 30}}>
                                    <img style = {{width: "100%", height: "100%"}} src="https://www.rentomojo.com/public/images/icons/offer-percentage.svg" alt="dishcount"/>
                                </div>
                                
                            </div>
                            <div>
                                <div>Use code <strong>{code}</strong></div>
                                <div>Get 5% of every month...</div>
                                <div>Read more</div>
                            </div>
                            <div>COPY</div>
                        </div>
                    </div>
                    
                    <div>
                        <div>
                            View Details
                        </div>
                        <div>
                            Add to cart
                        </div>
                    </div>
                </div>
            </div>
            
        </Modal>
    )
}