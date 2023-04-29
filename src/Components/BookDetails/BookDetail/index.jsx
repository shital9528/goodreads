import { Link } from "react-router-dom";

const BookDetail= (props) => {
    const {image, title, description} =props.data
    return(
        <div className="container shadow p-3 mb-5 bg-white rounded">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper shadow p-3 mb-5 bg-white rounded text-center">
                        <img src={ image } alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper shadow p-3 mb-5 bg-white rounded">
                        <h1>{ title }</h1>
                        <p>{ description }</p>
                    </div>
                    <div className="wrapper shadow p-3 mb-5 bg-white rounded">
                        <h1>Rating & Reviews</h1>
                        <Link to="/addreview">
                        <button type="button" class="btn btn-warning btn-lg btn-block">Write a Review</button>
                        </Link>
                    </div>
                    <div>
                    <h3>Displying 0 Reviews</h3>
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default BookDetail;