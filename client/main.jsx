import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/client/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

Meteor.startup(() => {
	injectTapEventPlugin();
  render(<App />, document.getElementById('render-target'));
});