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
 * The Split model module.
 * @module model/Split
 * @version 1.2.14
 */

class Split {
  /**
   * Constructs a new <code>Split</code>.
   * @alias module:model/Split
   */
  constructor() {
    Split.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Split</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Split} obj Optional instance to populate.
   * @return {module:model/Split} The populated <code>Split</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Split();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }

      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }

      if (data.hasOwnProperty('fromFactor')) {
        obj['fromFactor'] = ApiClient.convertToType(data['fromFactor'], 'Number');
      }

      if (data.hasOwnProperty('toFactor')) {
        obj['toFactor'] = ApiClient.convertToType(data['toFactor'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * Symbol.
 * @member {String} symbol
 */


Split.prototype['symbol'] = undefined;
/**
 * Split date.
 * @member {Date} date
 */

Split.prototype['date'] = undefined;
/**
 * From factor.
 * @member {Number} fromFactor
 */

Split.prototype['fromFactor'] = undefined;
/**
 * To factor.
 * @member {Number} toFactor
 */

Split.prototype['toFactor'] = undefined;
export default Split;