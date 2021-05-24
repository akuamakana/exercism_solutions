//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (moment) => {
  let seconds = moment.getTime() / 1000
  seconds += 1000000000
  return new Date(seconds * 1000)
};
