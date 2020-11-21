import moment from 'moment'

/**
 * Format the date to a given format
 * @param {string} value 
 * @param {string} format 
 */
export function formatDate(value, format) {
  return moment(value).local().format(format)
}
