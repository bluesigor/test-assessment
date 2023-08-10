import "./index.css";

type SearchProp = {
  getUser: () => void;
  setUsername: (username: string) => void;
  username: string;
};

const Search = ({ getUser, setUsername, username }: SearchProp) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <div className="search">
      <input
        value={username}
        className="search__input"
        type="text"
        placeholder="Type username..."
        onChange={handleInput}
      />
      <button className="search__btn" onClick={getUser}>
        Search
      </button>
    </div>
  );
};

export default Search;
