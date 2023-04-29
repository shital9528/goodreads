import BookData from "../../data/data";
import AddReview from "./AddReview";
const AddReviews = () => {
  return (
    <div className="container">
      <div className="row">
        {BookData.map((book) => (
          <AddReview data={book} />
        ))}
      </div>
    </div>
  );
};
export default AddReviews;
