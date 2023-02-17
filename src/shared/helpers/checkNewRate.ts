
export const checkNewRate = (oldRate: number, newRate: number): boolean => {
    const difference = Math.abs(oldRate - newRate);
    const threshold = 0.1 * oldRate;
    return difference <= threshold;
}
