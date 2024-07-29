const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


export default function App(){
  return (
    <div className="container">
      <Header />
      <PizzaList  pizzas={pizzaData}/>
      <Order />

    </div>
  )
}

function Header(){
  return (
    <div className="container-xl">
      <h1 className="heading-primary">
      &mdash; Fast React Pizza Co. &mdash;
      </h1>
      <div className="our-menu">
      <h3 >Our Menu</h3>

      </div>
      <div className="menu-desc">Authenentic Italian cuisine. 6 creative dishes to choose from. all from <br /> our stone oven, all organic, all delicious</div>
    </div>
  )
}


function PizzaList({pizzas}){
  console.log(pizzas)
  return (
    <div className="container-x">
      <ul className="pizza-list">
        {pizzas.map(pizza=><PizzaItem pizza={pizza}/>)}
      </ul>
    </div>

  )
}

function PizzaItem({pizza}){
  return (
    <li className={`item ${pizza.soldOut ? null: 'gray'}`}>
      <img src={`./${pizza.photoName}`} alt={pizza.name} className="pizza-img" />
      <div className="pizza-text">
      <p className="pizza-name">{pizza.name}</p>
      <p className="pizza-desc">{pizza.ingredients}</p>
      <p className="price">{pizza.price}</p>

      </div>
      </li>
  )
}

function  Order(){
  const now = new Date();
  const hours = now.getHours();
  const min = now.getMinutes();
  
  return (
    <div className="order">
      <p>We're open from 12:00 to 22:00. Come visit us or order online </p>
      <button className="order-btn">Order</button>
    </div>
  )
}