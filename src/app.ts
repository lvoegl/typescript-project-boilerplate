const sum = (...summands: number[]): number => {
    return summands.reduce((summand, total) => total + summand);
};

const multiply = (...factors: number[]): number => {
    return factors.reduce((factor, total) => total * factor);
};

export { sum, multiply };
