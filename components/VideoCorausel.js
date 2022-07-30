import React from 'react'

const VideoCorausel = () => {
  return (
    <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/a8FQaW9XVlU?controls=2"
            title="YouTube video player"
            frameBorder="0"
            
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/xHqGD4TSAtM?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/xLZ0uFr7LKg?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullsSreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/xLZ0uFr7LKg?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src= "https://www.youtube.com/embed/hJjpfnFyv74?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src=  "https://www.youtube.com/embed/3JSit_voEqc?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
          <div className="carousel-item">
          <iframe
            width="100%"
            height="500px"
            src=   "https://www.youtube.com/embed/jDHpSpilFuU?controls=2"
            title="YouTube video player"
            frameBorder="0"
            className="embed-responsive-item"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default VideoCorausel