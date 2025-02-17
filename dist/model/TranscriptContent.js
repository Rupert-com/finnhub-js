/**
 * Finnhub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
import ApiClient from '../ApiClient';
/**
 * The TranscriptContent model module.
 * @module model/TranscriptContent
 * @version 1.2.14
 */

class TranscriptContent {
  /**
   * Constructs a new <code>TranscriptContent</code>.
   * @alias module:model/TranscriptContent
   */
  constructor() {
    TranscriptContent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>TranscriptContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TranscriptContent} obj Optional instance to populate.
   * @return {module:model/TranscriptContent} The populated <code>TranscriptContent</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TranscriptContent();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }

      if (data.hasOwnProperty('speech')) {
        obj['speech'] = ApiClient.convertToType(data['speech'], ['String']);
      }

      if (data.hasOwnProperty('session')) {
        obj['session'] = ApiClient.convertToType(data['session'], 'String');
      }
    }

    return obj;
  }

}
/**
 * Speaker's name
 * @member {String} name
 */


TranscriptContent.prototype['name'] = undefined;
/**
 * Speaker's speech
 * @member {Array.<String>} speech
 */

TranscriptContent.prototype['speech'] = undefined;
/**
 * Earnings calls section (management discussion or Q&A)
 * @member {String} session
 */

TranscriptContent.prototype['session'] = undefined;
export default TranscriptContent;