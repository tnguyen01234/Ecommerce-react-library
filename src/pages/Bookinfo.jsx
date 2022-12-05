import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Price from "../Components/ui/Price";
import Rating from "../Components/ui/Rating";

export default function Bookinfo({ books }) {
  const { id } = useParams();
const book = books.find(book => +book.id === +id);


  console.log(id)
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt=""
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">
                  {book.title}
                </h2>
                <Rating rating="4.5" />
                <div className="book__selected--price">
                  <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit quod quis eaque nulla repellendus voluptates
                    quibusdam eligendi ea quo earum harum repellat officiis
                    cupiditate, culpa dolorum assumenda est odit amet!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit quod quis eaque nulla repellendus voluptates
                    quibusdam eligendi ea quo earum harum repellat officiis
                    cupiditate, culpa dolorum assumenda est odit amet!
                  </p>
                </div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="book__container">
          <div className="ro">
            <div className="books__selected--top">
              <h2 className="book__selected--title--top">
                Recommended Books
              </h2>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
