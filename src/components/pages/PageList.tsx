import React from "react";
import { RootState } from "core/redux";
import { userActions } from "services/user/user.store";
import { useDispatch, useSelector } from "react-redux";

const VList: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleNewUser = () => dispatch(userActions.newUserRequest('060A21C4-195D-8541-9AEC-B30BC74651BEDB6CF5FD-CD18-4939-A69F-3DFD5161B972'))
  const handleNewUserClear = () => dispatch(userActions.newUserUpdate(null))

  console.log(user);

  return (
    <React.Fragment>
      <div>home</div>
      <button onClick={handleNewUser}>New user</button>
      <button onClick={handleNewUserClear}>Clear</button>
    </React.Fragment>
  );
};

export default VList;

