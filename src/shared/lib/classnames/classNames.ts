type Mods = Record<string, boolean | string>;

export const classNames = (className: string, mods: Mods = {}, additional: string[] = []): string =>
    [
        className,
        ...additional,
        Object.keys(mods).filter(key => mods[key])
    ]
        .join(' ')