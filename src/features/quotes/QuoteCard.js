import React from 'react';
import { useDispatch } from 'react-redux';
import { removeQuote } from './quotesSlice';
import { upvoteQuote } from './quotesSlice';
import { downvoteQuote } from './quotesSlice';

function QuoteCard(props) {
  const dispatch = useDispatch();
  console.log(props.quote.id);

  function handleRemove() {
    dispatch(removeQuote(props.quote.id));
  }

  function handleUpvote() {
    dispatch(upvoteQuote(props.quote.id));
  }

  function handleDownvote() {
    dispatch(downvoteQuote(props.quote.id));
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{/*Render Quote Content*/ props.quote.content}</p>
            <footer>
              - author{' '}
              <cite title="Source Title">
                {/*Render Quote Author*/ props.quote.author}
              </cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button
              onClick={handleUpvote}
              type="button"
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              onClick={handleDownvote}
              type="button"
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              onClick={handleRemove}
              type="button"
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {/*Render Quote Votes*/ props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
