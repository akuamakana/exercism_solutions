//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const regex = new RegExp(`[a-zA-Z]`);
  const whitespace = new RegExp(`^[ \t\r\n\s]*$`);
  if (!message || whitespace.test(message)) {
    return 'Fine. Be that way!';
  }

  if (regex.test(message)) {
    let trimmedMessage = message.trimStart().trimEnd();
    if (trimmedMessage.toUpperCase() === trimmedMessage) {
      if (trimmedMessage[trimmedMessage.length - 1] === '?') {
        return "Calm down, I know what I'm doing!";
      }
      return 'Whoa, chill out!';
    }
    if (trimmedMessage[trimmedMessage.length - 1] === '?') {
      return 'Sure.';
    }
    return 'Whatever.';
  }
  if (message[message.length - 1] === '?') {
    return 'Sure.';
  }
  return 'Whatever.';
};
