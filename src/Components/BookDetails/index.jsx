import BookData from "../../data/data";
import BookDetail from "./BookDetail";
const BookDetails = () => {
  return (
    <div className="container">
      <div className="row">
        {BookData.map((book) => (
          <BookDetail data={book} />
        ))}
      </div>
    </div>
  );
};
export default BookDetails;
