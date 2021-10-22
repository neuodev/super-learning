import Navbar from "./components/Layout/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import MNIST from "./pages/MNIST";
import WordEmbedding from "./pages/WordEmbedding";
import { ROUTES } from "./utils/types";
import TwitterSentimentAnalysis from "./pages/TwitterSentimentAnalysis";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen ">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path={ROUTES.MNIST} exact component={MNIST} />
          <Route path={ROUTES.WORD_EMBEDDING} exact component={WordEmbedding} />
          <Route
            path={ROUTES.TWITTER_SETIMENT_ANALYSIS}
            exact
            component={TwitterSentimentAnalysis}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
