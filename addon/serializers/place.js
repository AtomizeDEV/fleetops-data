import ApplicationSerializer from '@atomizedev/ember-core/serializers/application';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class PlaceSerializer extends ApplicationSerializer.extend(EmbeddedRecordsMixin) {}
