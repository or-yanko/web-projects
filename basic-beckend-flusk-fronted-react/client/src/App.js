import React, {useState,useEffect} from "react";
function App() {
  const [data,setdata] = useState([{}])

  useEffect(() =>{
    fetch("members/").then(
      res=>res.json).then(
        data => {
          setdata(data)
          console.log(data)
        }
      )
  },[])

  return (
    <div >
    </div>
  );
}

export default App;
