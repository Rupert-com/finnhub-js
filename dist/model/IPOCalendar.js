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
import IPOEvent from './IPOEvent';
/**
 * The IPOCalendar model module.
 * @module model/IPOCalendar
 * @version 1.2.14
 */

class IPOCalendar {
  /**
   * Constructs a new <code>IPOCalendar</code>.
   * @alias module:model/IPOCalendar
   */
  constructor() {
    IPOCalendar.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>IPOCalendar</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IPOCalendar} obj Optional instance to populate.
   * @return {module:model/IPOCalendar} The populated <code>IPOCalendar</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IPOCalendar();

      if (data.hasOwnProperty('ipoCalendar')) {
        obj['ipoCalendar'] = ApiClient.convertToType(data['ipoCalendar'], [IPOEvent]);
      }
    }

    return obj;
  }

}
/**
 * Array of IPO events.
 * @member {Array.<module:model/IPOEvent>} ipoCalendar
 */


IPOCalendar.prototype['ipoCalendar'] = undefined;
export default IPOCalendar;