import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './styles.css';

import Main from './routes/Main';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Main} exact />
                <Route
                    path="/views/:view_id"
                    component={({ match }: any) => (
                        <div>view id {match.params.view_id}</div>
                    )}
                    exact
                />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
};
