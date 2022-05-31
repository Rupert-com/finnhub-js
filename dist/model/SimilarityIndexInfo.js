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
 * The SimilarityIndexInfo model module.
 * @module model/SimilarityIndexInfo
 * @version 1.2.14
 */

class SimilarityIndexInfo {
  /**
   * Constructs a new <code>SimilarityIndexInfo</code>.
   * @alias module:model/SimilarityIndexInfo
   */
  constructor() {
    SimilarityIndexInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>SimilarityIndexInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SimilarityIndexInfo} obj Optional instance to populate.
   * @return {module:model/SimilarityIndexInfo} The populated <code>SimilarityIndexInfo</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SimilarityIndexInfo();

      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }

      if (data.hasOwnProperty('item1')) {
        obj['item1'] = ApiClient.convertToType(data['item1'], 'Number');
      }

      if (data.hasOwnProperty('item1a')) {
        obj['item1a'] = ApiClient.convertToType(data['item1a'], 'Number');
      }

      if (data.hasOwnProperty('item2')) {
        obj['item2'] = ApiClient.convertToType(data['item2'], 'Number');
      }

      if (data.hasOwnProperty('item7')) {
        obj['item7'] = ApiClient.convertToType(data['item7'], 'Number');
      }

      if (data.hasOwnProperty('item7a')) {
        obj['item7a'] = ApiClient.convertToType(data['item7a'], 'Number');
      }

      if (data.hasOwnProperty('accessNumber')) {
        obj['accessNumber'] = ApiClient.convertToType(data['accessNumber'], 'String');
      }

      if (data.hasOwnProperty('form')) {
        obj['form'] = ApiClient.convertToType(data['form'], 'String');
      }

      if (data.hasOwnProperty('filedDate')) {
        obj['filedDate'] = ApiClient.convertToType(data['filedDate'], 'String');
      }

      if (data.hasOwnProperty('acceptedDate')) {
        obj['acceptedDate'] = ApiClient.convertToType(data['acceptedDate'], 'String');
      }

      if (data.hasOwnProperty('reportUrl')) {
        obj['reportUrl'] = ApiClient.convertToType(data['reportUrl'], 'String');
      }

      if (data.hasOwnProperty('filingUrl')) {
        obj['filingUrl'] = ApiClient.convertToType(data['filingUrl'], 'String');
      }
    }

    return obj;
  }

}
/**
 * CIK.
 * @member {String} cik
 */


SimilarityIndexInfo.prototype['cik'] = undefined;
/**
 * Cosine similarity of Item 1 (Business). This number is only available for Annual reports.
 * @member {Number} item1
 */

SimilarityIndexInfo.prototype['item1'] = undefined;
/**
 * Cosine similarity of Item 1A (Risk Factors). This number is available for both Annual and Quarterly reports.
 * @member {Number} item1a
 */

SimilarityIndexInfo.prototype['item1a'] = undefined;
/**
 * Cosine similarity of Item 2 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Quarterly reports.
 * @member {Number} item2
 */

SimilarityIndexInfo.prototype['item2'] = undefined;
/**
 * Cosine similarity of Item 7 (Management’s Discussion and Analysis of Financial Condition and Results of Operations). This number is only available for Annual reports.
 * @member {Number} item7
 */

SimilarityIndexInfo.prototype['item7'] = undefined;
/**
 * Cosine similarity of Item 7A (Quantitative and Qualitative Disclosures About Market Risk). This number is only available for Annual reports.
 * @member {Number} item7a
 */

SimilarityIndexInfo.prototype['item7a'] = undefined;
/**
 * Access number.
 * @member {String} accessNumber
 */

SimilarityIndexInfo.prototype['accessNumber'] = undefined;
/**
 * Form type.
 * @member {String} form
 */

SimilarityIndexInfo.prototype['form'] = undefined;
/**
 * Filed date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} filedDate
 */

SimilarityIndexInfo.prototype['filedDate'] = undefined;
/**
 * Accepted date <code>%Y-%m-%d %H:%M:%S</code>.
 * @member {String} acceptedDate
 */

SimilarityIndexInfo.prototype['acceptedDate'] = undefined;
/**
 * Report's URL.
 * @member {String} reportUrl
 */

SimilarityIndexInfo.prototype['reportUrl'] = undefined;
/**
 * Filing's URL.
 * @member {String} filingUrl
 */

SimilarityIndexInfo.prototype['filingUrl'] = undefined;
export default SimilarityIndexInfo;