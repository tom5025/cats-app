export const retryDelayWithJitter = (attemptIndex: number) => {
    const baseDelay = Math.min(1000 * 2 ** attemptIndex, 30000);
    const jitter = Math.random() * 100;
    return baseDelay + jitter;
};