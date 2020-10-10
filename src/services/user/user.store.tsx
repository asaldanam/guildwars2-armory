export const USER_REQUEST = "USER_REQUEST";
export const USER_UPDATE = "USER_UPDATE";
export const USER_SAVE_REQUEST = "USER_SAVE_REQUEST";
export const USER_SAVE_UPDATE = "USER_SAVE_UPDATE";

interface IUserState {
  loading: 'USER' | 'USER_SAVE' | null;
  newUserStatus: 'OK' | 'ERROR' | null;
  user: {
    username?: string;
    token?: string;
    error?: string;
  } | null;
}

/** STATE */
const initialState: IUserState = {
  loading: null,
  newUserStatus: null,
  user: null,
};

/** ACTIONS */
export const userActions = {
  newUserRequest: (token: string) => ({ type: USER_SAVE_REQUEST, payload: token }),
  newUserUpdate: (newUserStatus: IUserState['newUserStatus']) => ({ type: USER_SAVE_UPDATE, payload: newUserStatus }),
  userRequest: (username: string) => ({ type: USER_REQUEST, payload: username }),
  userUpdate: (user: IUserState['user']) => ({ type: USER_UPDATE, payload: user }),
}

/** REDUCERS */
const userStore = function (state = initialState, action: any): IUserState {
  switch (action.type) {
    case USER_REQUEST: {
      return {
        ...state,
        loading: 'USER',
      };
    }
    case USER_UPDATE: {
      return {
        ...state,
        loading: null,
        user: action.payload,
      };
    }
    case USER_SAVE_REQUEST: {
      return {
        ...state,
        loading: 'USER_SAVE',
      };
    }
    case USER_SAVE_UPDATE: {
      return {
        ...state,
        loading: null,
        newUserStatus: action.payload
      };
    }
    default:
      return state;
  }
};

export default userStore;
