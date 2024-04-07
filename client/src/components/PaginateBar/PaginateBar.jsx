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
        setCurrentPage(1);
    }



    
    return (
        <div className='paginate'>
            <div className='current-page'>
                <label className='title-paginate'>Elementos por página:</label>
                <select  className='select' id="selectorElementos" value={limit}  onChange={selectOption}>
                        <option value="">Seleccionar...</option>
                        <option value="12"   >12</option>
                        <option value="24"   >24</option>
                        <option value="36" >36</option>
                </select>
            </div>
            <div className='navigation-container'>
                <button className='prev' onClick={PrevPage}>
                    Prev
                </button>
                <div className='pagina-actual'>{currentPage}-{nPages}</div>
                <button className='next' onClick={NextPage}>
                    Next
                </button>      
            </div>
                
        </div>
    );
}

export default PaginateBar;