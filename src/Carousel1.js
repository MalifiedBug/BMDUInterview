export default function Carouserl1() {
  return (
    <div className="relative top-32">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="h-96 object-cover w-screen"
              alt=""
              src="https://wallpaperaccess.com/full/359098.jpg"
            ></img>
            <div className="absolute left-60 top-56">
              <p className="text-5xl text-white">Slide 1</p>
            </div>
            
          </div>
          <div className="carousel-item">
            <img
              className="h-96 object-cover w-screen "
              alt=""
              src="https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252_1280.jpg"
            ></img>
            <div className="absolute left-60 top-56">
              <p className="text-5xl text-white">Slide 2</p>
            </div>
            
          </div>
          <div className="carousel-item">
            <img
              className="h-96 object-cover w-screen"
              alt=""
              src="https://e0.pxfuel.com/wallpapers/458/54/desktop-wallpaper-nature-wood-tree-fog-gloomy-gloomily.jpg"
            ></img>
            <div className="absolute left-60 top-56">
              <p className="text-5xl text-white">Slide 3</p>
            </div>
            
          </div>
        </div>
        <div className="">
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
