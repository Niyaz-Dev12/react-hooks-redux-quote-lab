// Action Creators
// TODO: Create action creators as defined in tests
export function addQuote(formData) {
  return { type: 'quotes/add', payload: formData };
}

export function removeQuote(id) {
  return { type: 'quotes/remove', payload: id };
}

export function upvoteQuote(quoteId) {
  return { type: 'quotes/upvote', payload: quoteId };
}

export function downvoteQuote(quoteId) {
  return { type: 'quotes/downvote', payload: quoteId };
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'quotes/add':
      return [...state, action.payload];
    case 'quotes/remove':
      return state.filter((st) => st.id !== action.payload);
    case 'quotes/upvote':
      return state.map((quote) => {
        if (quote.id === action.payload) {
          return {
            ...quote,
            votes: quote.votes + 1,
          };
        } else {
          return quote;
        }
      });
    case 'quotes/downvote':
      return state.map((quote) => {
        if (quote.id === action.payload && quote.votes > 0) {
          return {
            ...quote,
            votes: quote.votes - 1,
          };
        } else {
          return quote;
        }
      });
    default:
      return state;
  }
}
