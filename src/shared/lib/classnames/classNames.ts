type Mods = Record<string, boolean | string>;

export const classNames = (className: string, mods: Mods = {}, additional: string[] = []): string => {
    const result = [
        className,
        ...additional,
    ];

    const modsKeys = Object.keys(mods);
    const isModKeys = modsKeys.length !== 0;

    if (isModKeys) {
        result.push(...modsKeys.filter(key => mods[key]));
    }

    return result.join(' ');
};
