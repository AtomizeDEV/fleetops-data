import ApplicationSerializer from '@fleetbase/ember-core/serializers/application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class OrderSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {
    /**
     * Embedded relationship attributes
     *
     * @var {Object}
     */
    get attrs() {
        return {
            payload: { embedded: 'always' },
            driver_assigned: { embedded: 'always' },
            facilitator: { embedded: 'always' },
            customer: { embedded: 'always' },
            transaction: { embedded: 'always' },
            route: { embedded: 'always' },
            tracking_number: { embedded: 'always' },
            tracking_statuses: { embedded: 'always' },
        };
    }

    /**
     * Serialize the record and remove unwanted attributes.
     *
     * @param {Snapshot} snapshot
     * @param {Object} options
     * @returns {Object}
     */
    serialize(snapshot, options) {
        const json = super.serialize(snapshot, options);
        const unshiftAttributes = [
            'order_config',
            'order_config_uuid',
            'driver_name',
            'tracking',
            'total_entities',
            'transaction_amount',
            'customer_name',
            'facilitator_name',
            'customer_is_vendor',
            'customer_is_contact',
            'pickup_name',
            'dropoff_name',
            'payload_id',
            'driver_id',
            'created_by_name',
            'updated_by_name',
            'purchase_rate_id',
        ];

        unshiftAttributes.forEach((attr) => {
            delete json[attr];
        });

        return json;
    }

    serializeBelongsTo(snapshot, json, relationship) {
        let key = relationship.key;

        if (key === 'order_config' || key === 'driver_assigned') {
            return;
        }

        super.serializeBelongsTo(...arguments);
    }
}