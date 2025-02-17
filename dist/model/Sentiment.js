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
 * The Sentiment model module.
 * @module model/Sentiment
 * @version 1.2.14
 */

class Sentiment {
  /**
   * Constructs a new <code>Sentiment</code>.
   * @alias module:model/Sentiment
   */
  constructor() {
    Sentiment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>Sentiment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Sentiment} obj Optional instance to populate.
   * @return {module:model/Sentiment} The populated <code>Sentiment</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Sentiment();

      if (data.hasOwnProperty('bearishPercent')) {
        obj['bearishPercent'] = ApiClient.convertToType(data['bearishPercent'], 'Number');
      }

      if (data.hasOwnProperty('bullishPercent')) {
        obj['bullishPercent'] = ApiClient.convertToType(data['bullishPercent'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * 
 * @member {Number} bearishPercent
 */


Sentiment.prototype['bearishPercent'] = undefined;
/**
 * 
 * @member {Number} bullishPercent
 */

Sentiment.prototype['bullishPercent'] = undefined;
export default Sentiment;