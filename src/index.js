module.exports = function toReadable (number) {
  let numeral = ''
    const number2numeral = (num) => {
        switch (num) {
            case '1': return 'one'
            case '2': return 'two'
            case '3': return 'three'
            case '4': return 'four'
            case '5': return 'five'
            case '6': return 'six'
            case '7': return 'seven'
            case '8': return 'eight'
            case '9': return 'nine'
            case '10': return 'ten'
            case '11': return 'eleven'
            case '12': return 'twelve'
            case '13': return 'thirteen'
            case '14': return 'fourteen'
            case '15': return 'fifteen'
            case '16': return 'sixteen'
            case '17': return 'seventeen'
            case '18': return 'eighteen'
            case '19': return 'nineteen'
            case '20': return 'twenty'
            case '30': return 'thirty'
            case '40': return 'forty'
            case '50': return 'fifty'
            case '60': return 'sixty'
            case '70': return 'seventy'
            case '80': return 'eighty'
            case '90': return 'ninety'
            case '100': return 'one hundred'
        }
    }

    if (number === 0) {return 'zero'}
    let fullNumber = String(number).toString().split('')
    let tenNumber = String(number % 100).toString()
    if (number > 99 && number % 100 === 0) {return number2numeral(fullNumber[0]) + ' hundred'}
    if (number > 99) {numeral += number2numeral(fullNumber[0]) + ' hundred '}
    if (number % 10 === 0) {
        numeral += number2numeral(fullNumber[fullNumber.length - 2] + fullNumber[fullNumber.length - 1])
    }else if (number % 100 > 20) {
        numeral += number2numeral(fullNumber[fullNumber.length - 2] + '0') + ' ' + number2numeral(fullNumber[fullNumber.length - 1])
    }else {numeral += number2numeral(tenNumber)}

    return numeral
}
// Mother fucker indian stile (((
