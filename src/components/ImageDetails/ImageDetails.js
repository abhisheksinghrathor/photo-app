import React from 'react';
import { getImagesId } from "../../request";
import './ImageDetails.scss';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import FileSaver from 'file-saver';


//const [images, setImages] = React.useState([]);


class ImageDetails extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
         images:  []
          //storageOptions: this.props.product.variants[0].pricingOptions
       }
      
    };
    componentDidMount() {
        let id =this.props.imageid;
       const getImagesbyId = async (id, pg = 1) => {
       
        const response = await getImagesId(id,1);
        let imgs = this.state.images.concat(response.data.hits);
        console.log(imgs[0]);
        this.setState({
            images: imgs[0]
        });
        pg++;
      };
     
      getImagesbyId(id);
  }  
  downloadImage(url) {
    //var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(url, "image.jpg");
}  
    
    render() {
        return (
            <div className="imgd_row" >
                <div className="imgd_columnleft product__img">
                   <img className="card-img-top " src={this.state.images.webformatURL} alt={this.state.images.tags} />
                   </div>
            <div className="imgd_columnright product__img">
        <div><img className="card-img-top imgd_user" src={this.state.images.userImageURL} alt={this.state.images.tags} /> {this.state.images.user}</div>
            <div>
                <div><i className="fa fa-thumbs-up"></i> {this.state.images.likes} </div>
                <div><i className="fa fa-comment"></i>{this.state.images.favorites} </div>
                <div><i class="fa fa-star"></i> {this.state.images.comments} </div>
            </div>
             <button type="button" class="btn btn-primary" onClick={() => this.downloadImage(this.state.images.fullHDURL)}>Download!</button>
            </div>
          </div>
        );
    }
 }
 export default ImageDetails;