import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Start from "./page/StartPage";
import TestExample from "./page/TestExamplePage";
import Test from "./page/TestPage";
import TestFinished from "./page/TestFinishedPage";
import Result from "./page/ResultPage";
import NotFound from "./page/NotFoundPage";

const SetPages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/start" />
        <Route path="/start">
          <Start />
        </Route>
        <Route path="/test-example">
          <TestExample />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/test-finished">
          <TestFinished />
        </Route>
        <Route path="/result">
          <Result />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SetPages;
