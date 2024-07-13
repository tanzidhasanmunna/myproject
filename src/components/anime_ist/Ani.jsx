import "./Ani.css";

export default function anime({ani}) {
  console.log(ani);
  const{name, title, img}=ani;
  return (
    <div className="ani-card">
      <img title={title} src={img} alt="image"/>
            <h4>
              {name}
            </h4>
    
            <button
                style={{
                padding: "4px",
                marginTop: "8px",
                backgroundColor: "rgb(0, 255, 255)",
                color: "black",
                fontWeight: "bold",
                }}
            >
              Add to Watchlist <i class="fa-solid fa-heart"></i>
            </button>
    </div>
  );
}
