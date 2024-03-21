import React from 'react';




const PaginateBar = ({nPages,limit, setLimit, currentPage, setCurrentPage}) => {

    

    const NextPage = () => {
        if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1);
    }

    const PrevPage = () => {
        if(currentPage !== 1)
        setCurrentPage(currentPage - 1);
    }

    const selectOption = (e) => {
        setLimit(e.target.value);
    }



    
    return (
        <div >
            <select value={limit}  onChange={selectOption}>
                <option value="">Seleccionar...</option>
                <option value="10"   >10</option>
                <option value="15"   >15</option>
                <option value="20" >20</option>
            </select>
            <div >
                <h3>{currentPage}-{nPages}</h3>
            </div>
            
            <button onClick={PrevPage}>Previous</button>
            <button onClick={NextPage}>Next</button>
        </div>
    );
}

export default PaginateBar;