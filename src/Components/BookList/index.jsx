import BookData from "../../data/data";
import Book from "./Book";

const BookList = () => {
  return (
    <div>
      <h1 className="text-center"><b>All Books</b></h1>
      <div className="row">
        {BookData.map((book) => (
          <Book data={book} />
        ))}
      </div>
    </div>
  );
};
export default BookList;
