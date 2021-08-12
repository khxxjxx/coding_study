import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './components/layout/Layout';
import LoadingSpinner from './components/ui/LoadingSpinner';

const NewQuote = lazy(() => import('./pages/NewQuote'));
const QuoteDetail = lazy(() => import('./pages/QuoteDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AllQuotes = lazy(() => import('./pages/AllQuotes'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }>
        <Switch>
          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
