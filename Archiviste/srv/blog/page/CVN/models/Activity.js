// emoji_Activity.js
const { emojiDictionary } = require('./emojiDictionary');

class EmojiActivity {
  replaceEmotions(message) {
    for (const emoji in emojiDictionary) {
      const regex = new RegExp(`:${emoji}:`, 'g');
      message = message.replace(regex, emojiDictionary[emoji]);
    }
    return message;
  }
}

module.exports = EmojiActivity;
