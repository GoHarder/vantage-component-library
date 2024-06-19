export type SvelteContext = {
  reducedMotion: boolean;
  style: {
    select: { variant: 'filled' | 'outlined' };
    switch: {
      icons: boolean;
      showOnlySelectedIcon: boolean;
    };
    textInput: { variant: 'filled' | 'outlined' };
  };
};
