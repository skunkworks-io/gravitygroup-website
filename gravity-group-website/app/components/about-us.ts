import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class AboutUsComponent extends Component {
  @tracked selectedOption: any;

  @action
  toggleList(selected: string) {
    var selectedOption = this.selectedOption;
    if (selectedOption === selected)
      this.selectedOption = undefined;
    else
      this.selectedOption = selected;
  }
}
