export type SvelteContext = {
    reducedMotion?: boolean;
    style: {
        numberInput?: {
            noAsterisk?: boolean;
            noSpinner?: boolean;
            variant?: 'filled' | 'outlined';
        };
        select?: {
            variant?: 'filled' | 'outlined';
        };
        switch?: {
            icons?: boolean;
            showOnlySelectedIcon?: boolean;
        };
        textInput?: {
            noAsterisk?: boolean;
            variant?: 'filled' | 'outlined';
        };
    };
};
