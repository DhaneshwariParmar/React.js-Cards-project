import { useEffect, useState } from 'react';

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';

function App() {

  const [courses, setCourses] = useState(null)
  const [loading, setLoadinng] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoadinng(true)
    try{
    let response = await fetch(apiUrl);
    let output = await response.json();
     setCourses(output.data)
    }
    catch(error){
      toast.error("some network issues")
    }
    setLoadinng(false)
  }
    useEffect(()=>{
      fetchData();
    },[])
  
  return(
<div className='min-h-screen flex flex-col bg-gray-700'>
  <div>
  <Navbar />
  </div>

<div className='bg-gray-700'>
  <div>
  <Filter filterData={filterData}
  category={category}
  setCategory={setCategory}
   />
  </div>

  <div className='w-11/12 flex flex-wrap justify-center items-center max-w-[1200px] mx-auto min-h-[50vh] '>
 {
  loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
 }
 </div>
</div>
</div>
)
}
export default App;
