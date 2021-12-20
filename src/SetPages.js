import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Start from "./pages/StartPage";
import TestExample from "./pages/TestExamplePage";
import Test from "./pages/TestPage";
import TestFinished from "./pages/TestFinishedPage";
import Result from "./pages/ResultPage";
import NotFound from "./pages/NotFoundPage";

const PATH = "/job-value-test";

const SetPages = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from={`${PATH}/`} to={`${PATH}/start`} />
        <Route path={`${PATH}/start`}>
          <Start />
        </Route>
        <Route path={`${PATH}/test-example`}>
          <TestExample />
        </Route>
        <Route path={`${PATH}/test`}>
          <Test />
        </Route>
        <Route path={`${PATH}/test-finished`}>
          <TestFinished />
        </Route>
        <Route path={`${PATH}/result`}>
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
