import React from 'react';
import {app} from './App.module.css';
import Components from './routes/router';

const App = () => {
	return <div className={app}>{Components}</div>;
};

export default App;
