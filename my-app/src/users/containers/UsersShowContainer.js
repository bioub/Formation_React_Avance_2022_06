import { connect } from 'react-redux';

import UsersShow from '../components/UsersShow/UsersShow';
import { selectUsersItemsById, selectUsersLoading } from '../selectors';

function mapStateToProps(state, ownProps) {
  return {
    user: selectUsersItemsById(state, ownProps.match.params.id),
    loading: selectUsersLoading(state),
  };
}

export default connect(mapStateToProps)(UsersShow);
