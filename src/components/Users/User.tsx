import { useAppSelector } from "../../core/hooks/useRedux";

import "./index.css";

const User = () => {
  const { user } = useAppSelector((state) => state.users);

  if (user?.id) {
    return (
      <li className="user-entity">
        <img className="user__avatar" src={user?.avatar_url} alt={user?.name} />
        <div className="user-content">
          <p className="user-content-head">
            <span className="user-content-head__title">{user?.name}</span>
            <span className="user-content-head-wrapper">
              <a
                target="_blank"
                className="user-content-head__link"
                href={user?.html_url}>
                Github profile{" "}
              </a>
            </span>
          </p>
          <p className="user-content__bio">{user?.bio}</p>
        </div>
      </li>
    );
  }

  return null;
};

export default User;
