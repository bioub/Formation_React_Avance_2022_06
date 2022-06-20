import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import { Link, Route, Switch } from 'react-router-dom';

import UserListContainer from '../../containers/UsersListContainer';
import UsersShowContainer from '../../containers/UsersShowContainer';
import UsersAdd from '../UsersAdd/UsersAdd';

export default function Users({ match }) {
  return (
    <div className="Users">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4}>
          <UserListContainer match={match} />
          <Button
            color="primary"
            variant="outlined"
            component={Link}
            to={match.path + '/add'}
          >
            Add <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Switch>
            <Route path={match.path + '/add'} component={UsersAdd} />
            <Route path={match.path + '/:id'} component={UsersShowContainer} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}
