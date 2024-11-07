import EmberRouter from '@ember/routing/router';
import config from 'gravity-group-website/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('roadside-assist');
  this.route('courier-services');
});
