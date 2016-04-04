import editCheckBoxControlTemplate from './stepway.editCheckBoxControl.template.html!text';

export const EDIT_CHECKBOX_COMPONENT = 'editCheckBoxControl';

export const editCheckBoxControlComponent = {
  template      : editCheckBoxControlTemplate,
  bindings      : {
    nyaSelect:  '='
  },
  controller    :
  class editCheckBoxControlController {
    constructor() {

    }

    static get $inject() {
      return [];
    }
  }
};
