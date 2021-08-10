// import React, {useContext} from 'react';
// import PropTypes from 'prop-types';
// import { useQuery } from 'react-apollo';
// import GET_USER from './getUser.graphql';

// const UserContext = useContext({});

// export const UserProvider = props => {
//   const { loading, data } = useQuery(GET_PRODUCT);
//   const product = loading || !data.authUser ? null : data.user;
//   return (
//     <UserContext.Provider value={product}>{props.children}</UserContext.Provider>
//   );
// };
// export const UserConsumer = UserContext.Consumer;
// export default UserContext;

// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
