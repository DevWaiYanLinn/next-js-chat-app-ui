export const join = <T>(...args: Array<T>) => {
    return args.filter(Boolean).join(' ');
};