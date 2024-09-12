import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.box}>
        <span>Find contacts by name</span>
        <input
          name="username"
          type="text"
          onChange={onFilterChange}
          value={filter}
        />
      </label>
    </div>
  );
};

export default SearchBox;
