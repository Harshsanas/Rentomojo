import React from 'react'
import { SearchContext } from '../../Context/SearchContext';
import { ProductProto } from '../productsProto/ProductProto';

function SearchProducts() {
    const {data} = React.useContext(SearchContext);
    const style = {
        container: {
            display: "flex",
            flexDirection : "column",

        },
        content: {
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gridTemplateRows: "auto",
            
        }
    }
    return (
        <div>
            <div>
                <h3>Search Results({data.length})</h3>
            </div>
            <div>
                {
                    data?.map(item => <ProductProto key = {item._id} {...item} />)
                }
            </div>
        </div>
    )
}

export default SearchProducts
