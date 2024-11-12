// import Product from './Product'
import Tasks from "./Task1";
import PropTypes from "prop-types";
// export default () => {

// const shoe = [
//   {promo :true , price:5000 , link :"https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129" } ,
//   {promo :true , price:5000 , link :"https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129" },
//   {promo :true , price:3000 , link :"https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129" },
//   {promo :true , price:3000 , link :"https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129" },
//   {promo :true , price:4000 , link :"https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129" },
// ]

//   return (
//     <>
//     <Product name ="Iphone12" promo= {true} price="1000" link="https://www.istudio.store/cdn/shop/files/iPhone_16_Pro_Desert_Titanium_TH_1.jpg?v=1725929129"/>
//     <Product name = "Iphone 13" promo = {true} price= "2000" link="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-gold-202404?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1712956909084"/>
//     <Product name = "Iphone 14" promo= {false} price = "3000" link = "https://www.mymac.dz/wp-content/uploads/2021/12/iphone-13-pro-or-600x600.jpg"/>
//     <hr />
//     <div className='grid grid-cols-4 gap-4'>
//       {
//         Product.map((Product)=>(
//           <Product link= {shoe.image} name={shoe.name}  price = {shoe.price} promo={shoe.promo} />
//         ))
//       }
//     </div>
//     </>
//     )
// }

// export default (props) =>{
//   const task = [
//     {name: "cleaning the wardrobe" , time: {time1}} ,
//     {name:"Watch choosing" , time: {time2}} ,
//   ]
//   return (
//     <>
// <Tasks name="Task1" time={task.time2}/>
// <Tasks name="Task2" time = {task.time1}/>
// <hr/>
// <div className='flex itmes-center justify-center flex-col   '>
//   {
// task.map((task)=> (
//   <Tasks  time= {task.time} name={task.name} />
// ))
//   }

// </div>

//     </>
//   )
// }

// export default (props) => {

//   const time1 = new Date('2024-11-09T10:00:00');
//   const time2 = new Date('2024-10-09T15:20:00');

//   const tasks = [
//  {}
//   return (
//     <>
//
//       <div className="flex items-center justify-center flex-col">
//         {tasks.map((task) => (
//           <Tasks  name={task.name} time={task.time} />
//         ))}
//       </div>
//     </>
//   );
// };

export default () => {
  const tasks = [
    { title: "Washing the car", deadline: "10", finished: true },
    {
      title: "buying the new iphone 16 pro",
      deadline: 15 ,
      finished: false,
    },
    { title: "playing tennis", deadline: "20", finished: false },
  ];
  return (
    <>
   <header>
    <nav className="flex items-center justify-around p-4" >
      <div className="flex justify-center items-center flex-row ">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYNJREFUaEPtmbFKA1EQRU9K7UQMGsRvsPQr7GKTQjAB/0lELKy0yzeYOo1/oAkE0TKWyoMIsm72zX1v47ow26TIfXPn3jtTTYeWf52W948LaDrBnAS2gRvgFNhKFPIBjIELYJlSI0dAH7hPIS15cwY8pNSKCdgHroETYDeFIOPNGzABRsDrujpVAkLzUyD8Nvk9A8fAe1kTVQLugEGTnf/gvgIuVQFz4OCfCAgpHKkCPgsPimkV/8/VGqtfOi1VI+QCxEg8gaJhsRESDZbhJv6cHZA7Eh+4AJMDoqsK3MTvI6RYKmI9AZMDoqsK3MTvO6BYKmI9AZMDoqsK3MTvO6BYKmI9AZMDoqsK3MTvO6BYKmI9AZMDoqsK3MTvO6BYKmI9AZMDoqsK3MTvO6BYKmKzE5gBPZF0U/DQy2FZ8aoRugXON9WRWDccE4eqgD3gCeiKZHXDX1YnpnAz+/XFjnxhhL6PfDt1dxapFxp+XJ2WFuuwMQF/3LNO5wJ0z+p90foEvgAss1wx5D4mfAAAAABJRU5ErkJggg=="/><p className="text-3xl font-bold">To do list</p>
    </div> 
      <div className="flex items-center justify-center flex-row">
        <ul className="list-none flex flex-row gap-4 text-xl">
          <li>Home</li>
          <li>Whats on mind</li>
          <li>Saved tasks</li>
        </ul>
        </div>
        <div className="gap-6 flex-row flex ">
          <button className="flex items-center rounded-lg p-4 bg-orange-600 text-white hover:bg-orange-300 trnasition-all font-semibold">Creat Tasks</button>
          <button className="flex items-center rounded-lg p-4 bg-black text-white hover:bg-gray-600 transition-all font-semibold">Fetch styled boards</button>
        </div>
    </nav>
   </header>
   <div>
      <ul >
        {tasks.map((task) => (
          <Tasks
            title={task.title}
            deadline={task.deadline}
            finished={task.finished}
          />
        ))}
      </ul>
      </div>
    </>
  );
};
