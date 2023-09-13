function addCommas(num) {
    const locale = 'en-US';
    const formattedNumber = new Intl.NumberFormat(locale).format(num);

    return formattedNumber;
}
module.exports = addCommas;