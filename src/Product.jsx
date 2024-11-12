import Product from './Product'
export default (props) => {
        let price = 'Price'
        let name = 'name'
        return (
        <div className="bg-gray-400 flex items-center justify-center flex-col p-6 m-20 rounded-lg ">
<img src={props.link}alt=""/>
      <p>{props.name}</p> 
      <h1> {props.price}</h1>
      <h2> {props.size} </h2>
       { props.promo   &&  <span className="bg-orange-400"> Promo </span>} 
        </div>
        )
    
}