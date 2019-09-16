import React  from 'react';
import { Router } from 'react-router-dom'
import { history } from 'stores/routing'
import Routes from 'routes/setup'

function App() {
  // Створюємо нову змінну стану, яку назвемо "count"
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
