const AddReview = (props) => {
    const { image, title, description } = props.data
    return (
        <div className="container shadow p-3 mb-5 bg-white rounded">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper shadow p-3 mb-5 bg-white rounded text-center">
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper shadow p-3 mb-5 bg-white rounded">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <h3>Rating & Reviews</h3>

                    </div>


                    <div className="wrapper">
                        <h6>What did you think?</h6>
                        <textarea class="form-control " rows="8" cols="33" ></textarea>
                    </div>
                    <br></br>
                    <div className="wrapper">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>


                </div>

            </div>
        </div>
    )
}
export default AddReview;