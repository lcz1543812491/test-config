const { formatStorageNumberToObj } = require('../src/index')

test('test number is 1024, decimal is 0, expect the result is number: 1, unit: KB', () => {
    const { number, unit } = formatStorageNumberToObj(1024, 0)
    expect(number).toBe(1)
    expect(unit).toBe('KB')
})

test('test number is 1048576, decimal is 2,  expect result is number: 1, unit: MB', () => {
    const { number, unit } = formatStorageNumberToObj(1048576, 0)
    expect(number).toBe(1)
    expect(unit).toBe('MB')
})

test('test number is 1248576, decimal is 2,  expect result is number: 1.19, unit: MB', () => {
    const { number, unit } = formatStorageNumberToObj(1048576, 0)
    expect(number).toBe(1)
    expect(unit).toBe('MB')
})
