// export default (props) => {
    
//     const time1 = new Date(props.time1);
//     const time2 = new Date(props.time2);
  
    
//     const name = 'name'; 
//     const done = 'done'; 
  
//     return (
//       <div className="grid grid-cols-3  text-black font-bold text-3xl gap-4 ">
//         <h2>{props.name}</h2> 
//         <h2>{props.time1}</h2>
        
//         {props.time1 < time2 ? (
//           <span className="text-red-600 gap-10">Outdated</span> ,<input type="checkbox" />
//         ) : (
//           <span className="text-green-600 gap-10">On time</span>
//         )}
//       </div>
//     );
//   };

export default (props) => {

  const day = new Date ().getDate ();
  const calculate = ()=> {
    calculate(props.deadline)
    
  }
  return (
    <>
    <div className="flex items-center justify-center bg-black m-auto max-w-screen-xl   text-white ">
    <div className="flex items-center justify-center gap-4 max-w-screen-xl flex-col" onMouseEnter={()=> alert='entered'}>
      <h1 className="text-2xl"> {props.title} </h1>
      <p><span className= {props.deadline < day ? 'text-red-600': 'text-green-500'}> {props.deadline} </span>
      {props.finished && <span className="bg-green-400 rounded-lg p-2" > Done</span>}</p>
      <button  className="flex items-center rounded-lg bg-white text-black p-4 font-bold hover:bg-green-400 transition-color duration-200" onClick={() =>{}}>Done</button>
      <button className="bg-orange-400 m-2 rounded-lg flex items-center p-4 font-bold transition-color duration-200 hover:bg-orange-600">Postpone it</button>
     
    </div>
    </div>
    <div className="bg-white">
      <p>.</p>
    </div>
    </>


  )
}