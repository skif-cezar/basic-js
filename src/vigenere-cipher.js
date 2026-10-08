const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect !== false;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this._process(message, key, "encrypt");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    return this._process(encryptedMessage, key, "decrypt");
  }

  _process(text, key, mode) {
    const textUpper = text.toUpperCase();
    const keyUpper = key.toUpperCase();

    let result = "";
    let keyIndex = 0;
    const keyLen = keyUpper.length;

    for (let i = 0; i < textUpper.length; i++) {
      const code = textUpper.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        const charCode = code - 65;
        const keyCode = keyUpper.charCodeAt(keyIndex % keyLen) - 65;
        let processedCode;

        if (mode === "encrypt") {
          processedCode = (charCode + keyCode) % 26;
        } else {
          processedCode = (charCode - keyCode + 26) % 26;
        }

        result += String.fromCharCode(processedCode + 65);
        keyIndex++;
      } else {
        result += textUpper[i];
      }
    }

    if (!this.isDirect) {
      return result.split("").reverse().join("");
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
