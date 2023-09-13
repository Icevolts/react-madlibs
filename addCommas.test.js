const addCommas = require("./addCommas");

const nums = [1234, 1000000, 9876543210, 6, -10, -5678, 12345.678, -3141592.65]
const strings = ['1,234', '1,000,000', '9,876,543,210', '6', '-10', '-5,678', '12,345.678', '-3,141,592.65']
describe("#addCommas", () => {
  test("it takes a number and converts it to a string with correct comnma placement", () => {
    expect(addCommas(nums[0])).toBe(strings[0]);
    expect(addCommas(nums[1])).toBe(strings[1]);
    expect(addCommas(nums[2])).toBe(strings[2]);
    expect(addCommas(nums[3])).toBe(strings[3]);
    expect(addCommas(nums[4])).toBe(strings[4]);
    expect(addCommas(nums[5])).toBe(strings[5]);
    expect(addCommas(nums[6])).toBe(strings[6]);
    expect(addCommas(nums[7])).toBe(strings[7]);
  });
});
