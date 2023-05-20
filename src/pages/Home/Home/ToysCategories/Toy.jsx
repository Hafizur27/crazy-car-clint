const Toy = ({ toy }) => {
  const { photo, name, price, rating } = toy;
  return (
    <div>
      <div className="card h-screen bg-base-100 shadow-xl mb-4 mr-4">
        <figure>
          <img src={photo} alt="Shoes" className=""/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <p>Ratings : {rating}</p>
          <div className="">
            <button className="btn btn-primary"> Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
