import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router'

import App from './containers/app/App'
import Movies from './components/Movies/Movies'
import Movie from './components/Movie/Movie'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Movies} />
            <Route path="movies" component={Movies}>
                <Route path=":id" component={Movie} />
            </Route>
        </Route>
    </Router>
)