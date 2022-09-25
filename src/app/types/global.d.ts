declare module '*.module.scss' {
    interface ClassNames {
        [className: string]: string
    }

    const classNames: ClassNames;
    export = classNames
}

declare module '*.svg' {
    import React from 'react';
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;

    export default SVG;
}