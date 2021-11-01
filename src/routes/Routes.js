import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Home from '../page/Home';
import MatchDetail from '../page/MatchDetail';
import TeamDetail from '../page/TeamDetail';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/matchDetail" component={MatchDetail} />
            <Route path="/teamDetail" component={TeamDetail} />
        </Switch>
    );
}
