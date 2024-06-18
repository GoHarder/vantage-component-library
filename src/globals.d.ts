declare global {
  namespace VantageSvelte {
    type Context = {
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
  }
}

export {};
