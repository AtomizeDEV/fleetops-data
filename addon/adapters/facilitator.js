import ApplicationAdapter from '@atomizedev/ember-core/adapters/application';

export default class FacilitatorAdapter extends ApplicationAdapter {
    urlForQuery() {
        return `${this.host}/${this.namespace}/query/facilitators`;
    }
}
