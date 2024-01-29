import { useState } from 'react';
import css from './searchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({
      search: '',
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <button type="submit" className={css.button}>
        <span className={css.buttonLabel}>Search</span>
      </button>

      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={handleChange}
        value={state.search}
        name="search"
        required
      />
    </form>
  );
};

export default SearchForm;
