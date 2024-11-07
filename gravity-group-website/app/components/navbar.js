import { action } from '@ember/object';
import { inject } from '@ember/service';
import Component from '@glimmer/component';

export default class NavbarComponent extends Component {
  @inject router;

  get currentYear() {
    return new Date().getFullYear();
  }

  @action
  transitionTo(route, event) {
    event && event.preventDefault();
    document.querySelector('.navbar-toggler').click();
    this.router.transitionTo(route);
  }
}
