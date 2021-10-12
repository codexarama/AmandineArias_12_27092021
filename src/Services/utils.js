// CHANGE XAXIS VALUE OF AVERAGE SESSIONS //////////////////////////////
import PropTypes from 'prop-types'

/**
 * Change xAxis value of Average Sessions
 * @param {number} day from fetched data
 * @returns {string} first letter day name
 */

 export const convertToWeekDay = (day) => {
  let firstLetter
  console.log(day);
  switch (day) {
    case 1 || "L":
      firstLetter = 'L'
      break
    case 2 || "M":
      firstLetter = 'M'
      break
    case 3 || "M":
      firstLetter = 'M'
      break
    case 4 || "J":
      firstLetter = 'J'
      break
    case 5 || "V":
      firstLetter = 'V'
      break
    case 6 || "S":
      firstLetter = 'S'
      break
    case 7 || "D":
      firstLetter = 'D'
      break
    default:
      firstLetter = ''
      break
  }
  return firstLetter
}

// PROTYPES
convertToWeekDay.propTypes = {
  day: PropTypes.string.isRequired
}