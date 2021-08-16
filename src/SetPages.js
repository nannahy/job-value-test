import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Start from './Start';
import Test, { TestExample, TestFinished } from './Test';
import Result from './Result';

const NotFoundPage = () => {
    const history = useHistory();

    return (
        <div>
            <h1>페이지를 찾을 수 없습니다</h1>
            <button onClick={() => history.push('/start')}>시작 화면으로 가기</button>
        </div>
    )
};

const SetPages = () => {
    return (
        <BrowserRouter> 
            <Switch>
                <Redirect exact from='/' to='/start' />
                <Route path='/start'><Start /></Route>
                <Route path="/test-example"><TestExample /></Route>
                <Route path='/test'><Test /></Route>
                <Route path='/test-finished'><TestFinished /></Route>
                <Route path='/result'><Result /></Route>
                <Route><NotFoundPage /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default SetPages;