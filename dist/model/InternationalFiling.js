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
 * The InternationalFiling model module.
 * @module model/InternationalFiling
 * @version 1.2.14
 */

class InternationalFiling {
  /**
   * Constructs a new <code>InternationalFiling</code>.
   * @alias module:model/InternationalFiling
   */
  constructor() {
    InternationalFiling.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>InternationalFiling</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InternationalFiling} obj Optional instance to populate.
   * @return {module:model/InternationalFiling} The populated <code>InternationalFiling</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InternationalFiling();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }

      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }

      if (data.hasOwnProperty('filedDate')) {
        obj['filedDate'] = ApiClient.convertToType(data['filedDate'], 'String');
      }

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }

      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }

      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }

    return obj;
  }

}
/**
 * Symbol.
 * @member {String} symbol
 */


InternationalFiling.prototype['symbol'] = undefined;
/**
 * Company name.
 * @member {String} companyName
 */

InternationalFiling.prototype['companyName'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

InternationalFiling.prototype['filedDate'] = undefined;
/**
 * Category.
 * @member {String} category
 */

InternationalFiling.prototype['category'] = undefined;
/**
 * Document's title.
 * @member {String} title
 */

InternationalFiling.prototype['title'] = undefined;
/**
 * Document's description.
 * @member {String} description
 */

InternationalFiling.prototype['description'] = undefined;
/**
 * Url.
 * @member {String} url
 */

InternationalFiling.prototype['url'] = undefined;
/**
 * Language.
 * @member {String} language
 */

InternationalFiling.prototype['language'] = undefined;
/**
 * Country.
 * @member {String} country
 */

InternationalFiling.prototype['country'] = undefined;
export default InternationalFiling;