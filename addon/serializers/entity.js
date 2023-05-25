import ApplicationSerializer from '@fleetbase/ember-core/serializers/application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class EntitySerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    /**
     * Embedded relationship attributes
     *
     * @var {Object}
     */
    get attrs() {
        return {
            payload: { serialize: 'ids' },
            destination: { embedded: 'always' },
            trackingNumber: { embedded: 'always' },
            driver: { embedded: 'always' },
            photo: { embedded: 'always' },
            facilitator: { embedded: 'always' },
            customer: { embedded: 'always' },
        };
    }

    serializeBelongsTo(snapshot, json, relationship) {
        let key = relationship.key;

        if (key === 'payload' || key === 'facilitator' || key === 'customer' || key === 'driver') {
            return;
        }

        super.serializeBelongsTo(...arguments);
    }
}