import React from "react";
import { getImages } from "../../request";
import InfiniteScroll from "react-infinite-scroller";
import Masonry from "react-masonry-component";
import Pagination from '../../components/Pagination/Pagination';
import { masonryOptions } from "../../export";
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './HomePage.scss';

function HomePage() {
  const [images, setImages] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [initialized, setInitialized] = React.useState(false);
  const getAllImages = async (pg = 1) => {
    const response = await getImages(page);
    let imgs = images.concat(response.data.hits);
    setImages(imgs);
    setTotal(response.data.total);
    pg++;
    setPage(pg);
  };
  React.useEffect(() => {
    if (!initialized) {
      getAllImages();
      setInitialized(true);
    }
  });
  return (
    <div className="page">
      
      <InfiniteScroll
        pageStart={1}
        loadMore={getAllImages}
        hasMore={total > images.length}
      >
        <Masonry
          className={"grid"}
          elementType={"div"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {images.map((img, i) => {
            return (
              <div className="image imgcontainer">
              <div className="imageCard" key={i}>                
                <Link to={`/image/${img.id}`}><img src={img.webformatURL} style={{ width: 300 }} /></Link>
              </div>              
            <div className="imageCarddetail middle row">
              <div className="text"><em className="column">{img.user}</em></div>
              <div className="text column">
              <em className="column">{img.likes}<i className="fa fa-thumbs-up"></i> </em>
              <em className="column">{img.comments}<i className="fa fa-comment"></i> </em>
              <em className="column">{img.favorites}<i class="fa fa-star"></i> </em>
              </div>
              </div>
          </div>
            );
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
};
export default HomePage;