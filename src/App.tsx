import { useState } from "react";
import axios from "axios";

import BeatLoader from "react-spinners/BeatLoader";

import Search from "./components/Search/Search";
import Users from "./components/Users/Users";

import { useAppDispatch } from "./core/hooks/useRedux";
import { BASE_URL } from "./core/constants";
import { setUser } from "./core/store/reducers/user/userSlice";

function App() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const getUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/${username}`);

      dispatch(setUser(response.data));
      setIsLoading(false);
      setUsername("");
      setError("");
    } catch (err: any) {
      setIsLoading(false);
      dispatch(setUser(null));
      setError(err?.response?.data?.message);
    }
  };

  return (
    <>
      <Search username={username} setUsername={setUsername} getUser={getUser} />
      <Users />
      <h1 className="error__msg">{error || null}</h1>
      {isLoading && (
        <BeatLoader
          className="spinner"
          color="rgb(130, 173, 184)"
          loading={isLoading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
}

export default App;
