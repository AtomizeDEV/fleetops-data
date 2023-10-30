import ExtensionModel from '@atomizedev/console/models/extension';
import { attr } from '@ember-data/model';

export default class OrderConfigModel extends ExtensionModel {
    @attr('string') install_uuid;
    @attr('boolean') installed;
}
