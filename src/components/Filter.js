import React from "react";

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 max-w-7xl mx-auto py-4 flex flex-wrap justify-center gap-4">
            {
                filterData.map((data) => (
                    <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 "
                     key={data.id}
                     onClick={()=> filterHandler(data.title)}>
                        {data.title}</button>
                ))
            }
        </div>
    )

}

export default Filter;
