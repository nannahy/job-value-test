import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Start from "./pages/StartPage";
import TestExample from "./pages/TestExamplePage";
import Test from "./pages/TestPage";
import TestFinished from "./pages/TestFinishedPage";
import Result from "./pages/ResultPage";
import NotFound from "./pages/NotFoundPage";

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
