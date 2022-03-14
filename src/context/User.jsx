import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const user = createContext();
const userUpdater = createContext();

export function useUser() {
  return useContext(user);
}

export function useUserUpdater() {
  return useContext(userUpdater);
}

export function UserProvider(props) {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <user.Provider value={currentUser}>
      <userUpdater.Provider value={setCurrentUser}>
        {children}
      </userUpdater.Provider>
    </user.Provider>
  );
}

export default user;

UserProvider.defaultProps = {
  children: React.createElement,
};

UserProvider.propTypes = {
  children: PropTypes.element,
};
