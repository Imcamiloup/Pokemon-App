import React from 'react';

import './PaginateBar.css';


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
        <div className='paginate'>
            <label >Elementos por página:</label>
            <div className='elementos-por-pagina'>
                <select id="selectorElementos" value={limit}  onChange={selectOption}>
                    <option value="">Seleccionar...</option>
                    <option value="10"   >10</option>
                    <option value="15"   >15</option>
                    <option value="20" >20</option>
                </select>
            </div>
            
            <div >
                <h3 className='pagina-actual'>{currentPage}-{nPages}</h3>
            </div>
            
            <button className='prev' onClick={PrevPage}>Previous</button>
            <button className='next' onClick={NextPage}>Next</button>
        </div>
    );
}

export default PaginateBar;