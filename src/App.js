import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner"

const App = () =>{

  const[courses , setCourses] = useState(null);
  const[loading,setLoading]= useState(true);
  const[category,setCategory]=useState(filterData[0].title)
  
  useEffect(() =>{
    // API calling
    const fetchData = async () =>{
      //loader on
      setLoading(true);
      try{
        const response = await fetch(apiUrl );
        const output = await response.json();
        // Saving data  into variable
        setCourses(output.data);
        //loader off
        setLoading(false);

      }
      catch(error){
        toast.error("Something went wrong");
      }
    }
    fetchData();

  },[])

  return (
   <div className='flex flex-col min-h-screen bg-bgDark2 '>
     <div >
      <Navbar></Navbar>
    </div>
    
     <div className="bg-bgDark2">
       <div>
      <Filter filterData={filterData}  setCategory={setCategory} category={category}></Filter>
      </div>
      
    <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
        loading ?(<Spinner/>):(<Cards courses = {courses} category={category}></Cards>)
      }
    
    </div>
     </div>
   </div>
  );
};

export default App;