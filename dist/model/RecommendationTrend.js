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
 * The RecommendationTrend model module.
 * @module model/RecommendationTrend
 * @version 1.2.14
 */

class RecommendationTrend {
  /**
   * Constructs a new <code>RecommendationTrend</code>.
   * @alias module:model/RecommendationTrend
   */
  constructor() {
    RecommendationTrend.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>RecommendationTrend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecommendationTrend} obj Optional instance to populate.
   * @return {module:model/RecommendationTrend} The populated <code>RecommendationTrend</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RecommendationTrend();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }

      if (data.hasOwnProperty('buy')) {
        obj['buy'] = ApiClient.convertToType(data['buy'], 'Number');
      }

      if (data.hasOwnProperty('hold')) {
        obj['hold'] = ApiClient.convertToType(data['hold'], 'Number');
      }

      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }

      if (data.hasOwnProperty('sell')) {
        obj['sell'] = ApiClient.convertToType(data['sell'], 'Number');
      }

      if (data.hasOwnProperty('strongBuy')) {
        obj['strongBuy'] = ApiClient.convertToType(data['strongBuy'], 'Number');
      }

      if (data.hasOwnProperty('strongSell')) {
        obj['strongSell'] = ApiClient.convertToType(data['strongSell'], 'Number');
      }
    }

    return obj;
  }

}
/**
 * Company symbol.
 * @member {String} symbol
 */


RecommendationTrend.prototype['symbol'] = undefined;
/**
 * Number of recommendations that fall into the Buy category
 * @member {Number} buy
 */

RecommendationTrend.prototype['buy'] = undefined;
/**
 * Number of recommendations that fall into the Hold category
 * @member {Number} hold
 */

RecommendationTrend.prototype['hold'] = undefined;
/**
 * Updated period
 * @member {String} period
 */

RecommendationTrend.prototype['period'] = undefined;
/**
 * Number of recommendations that fall into the Sell category
 * @member {Number} sell
 */

RecommendationTrend.prototype['sell'] = undefined;
/**
 * Number of recommendations that fall into the Strong Buy category
 * @member {Number} strongBuy
 */

RecommendationTrend.prototype['strongBuy'] = undefined;
/**
 * Number of recommendations that fall into the Strong Sell category
 * @member {Number} strongSell
 */

RecommendationTrend.prototype['strongSell'] = undefined;
export default RecommendationTrend;