import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './styles.css';

export const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    component={() => (
                        <div>
                            <Link to="/views/123">button</Link>
                        </div>
                    )}
                    exact
                />
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
