import React from 'react';
import FilterArea from './containers/FilterArea';
import List from './containers/List';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<FilterArea />
			<List />
		</Provider>
	);
}

export default App;
