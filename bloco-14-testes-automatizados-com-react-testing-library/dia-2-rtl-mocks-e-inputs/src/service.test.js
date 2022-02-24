const service = require('./service')


it('testing if the function was called, what its return and how many times it was called', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

it('test of function division', () => {
  service.division = jest.fn().mockReturnValue(5);

  expect(service.division()).toBe(5);
  expect(service.division).toHaveBeenCalled();
  expect(service.division).toHaveBeenCalledTimes(1);
})