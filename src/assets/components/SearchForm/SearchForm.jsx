import React, { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => setQuery(e.currentTarget.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(query);

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" value={query} onChange={handleChange} />
        </label>
        <button type="submit">Искать</button>
      </form>
    </>
  );
};

// class SearchForm extends React.Component {
//   state = {
//     query: '',
//   };

//   handleChange = (e) => {
//     this.setState({ query: e.currentTarget.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.query);

//     this.setState({ query: '' });
//   };
//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               type="text"
//               value={this.state.query}
//               onChange={this.handleChange}
//             />
//           </label>
//           <button type="submit">Искать</button>
//         </form>
//       </>
//     );
//   }
// }

export default SearchForm;
