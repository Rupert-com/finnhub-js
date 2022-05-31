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
 * The UpgradeDowngrade model module.
 * @module model/UpgradeDowngrade
 * @version 1.2.14
 */

class UpgradeDowngrade {
  /**
   * Constructs a new <code>UpgradeDowngrade</code>.
   * @alias module:model/UpgradeDowngrade
   */
  constructor() {
    UpgradeDowngrade.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  static initialize(obj) {}
  /**
   * Constructs a <code>UpgradeDowngrade</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpgradeDowngrade} obj Optional instance to populate.
   * @return {module:model/UpgradeDowngrade} The populated <code>UpgradeDowngrade</code> instance.
   */


  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpgradeDowngrade();

      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }

      if (data.hasOwnProperty('gradeTime')) {
        obj['gradeTime'] = ApiClient.convertToType(data['gradeTime'], 'Number');
      }

      if (data.hasOwnProperty('fromGrade')) {
        obj['fromGrade'] = ApiClient.convertToType(data['fromGrade'], 'String');
      }

      if (data.hasOwnProperty('toGrade')) {
        obj['toGrade'] = ApiClient.convertToType(data['toGrade'], 'String');
      }

      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
    }

    return obj;
  }

}
/**
 * Company symbol.
 * @member {String} symbol
 */


UpgradeDowngrade.prototype['symbol'] = undefined;
/**
 * Upgrade/downgrade time in UNIX timestamp.
 * @member {Number} gradeTime
 */

UpgradeDowngrade.prototype['gradeTime'] = undefined;
/**
 * From grade.
 * @member {String} fromGrade
 */

UpgradeDowngrade.prototype['fromGrade'] = undefined;
/**
 * To grade.
 * @member {String} toGrade
 */

UpgradeDowngrade.prototype['toGrade'] = undefined;
/**
 * Company/analyst who did the upgrade/downgrade.
 * @member {String} company
 */

UpgradeDowngrade.prototype['company'] = undefined;
/**
 * Action can take any of the following values: <code>up(upgrade), down(downgrade), main(maintains), init(initiate), reit(reiterate)</code>.
 * @member {String} action
 */

UpgradeDowngrade.prototype['action'] = undefined;
export default UpgradeDowngrade;