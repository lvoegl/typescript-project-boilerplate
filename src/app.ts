/**
 * Sums up all given parameters
 * @param summands numbers to sum up
 * @returns the total sum
 */
const sum = (...summands: number[]): number => {
    return summands.reduce((summand, total) => total + summand);
};

/**
 * Multiplies all given parameters
 * @param factors numbers to multiply
 * @returns the product of all numbers
 */
const multiply = (...factors: number[]): number => {
    return factors.reduce((factor, total) => total * factor);
};

export { sum, multiply };
