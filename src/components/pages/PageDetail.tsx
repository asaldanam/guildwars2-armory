import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userActions } from "services/user/user.store";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "core/redux";

const VDetail: React.FC = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(userActions.userRequest(username))
  }, [dispatch, username]);

  return (
    <React.Fragment>
      <div>{username}</div>
      {loading && <div>loading...</div>}
      {user?.token && <div>{user?.token}</div>}
      {user?.error && <div>{user?.error}</div>}
    </React.Fragment>
  );
};

export default VDetail;
