/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />


declare module 'aos' {
    const AOS: {
      init: (options?: AosOptions) => void;
      refresh: () => void;
      // Adicione outras propriedades e métodos conforme necessário
    };
  
    export default AOS;
  
    interface AosOptions {
      // Defina os tipos de opções do AOS conforme necessário
    }
  }

  declare module 'typed.js' {
    export default class Typed {
      constructor(elementId: string | HTMLElement, options: Record<string, any>);
    }
  }

  declare module 'lenis' {
    export interface LenisEvent {
        scrollY: number;
        // Add other properties you expect here
    }

    interface LenisOptions {
        duration?: number;
        easing?: (t: number) => number;
        orientation?: 'vertical' | 'horizontal';
        gestureOrientation?: 'vertical' | 'horizontal';
        smoothWheel?: boolean;
        wheelMultiplier?: number;
        touchMultiplier?: number;
        infinite?: boolean;
    }

    class Lenis {
        constructor(options?: LenisOptions);
        on(event: 'scroll', callback: (e: LenisEvent) => void): void;
        raf(time: number): void;
    }

    export default Lenis;
}
  

declare module 'simple-parallax-js' {
  interface SimpleParallaxOptions {
    scale?: number;
    
  }

  export default class SimpleParallax {
    constructor(elements: HTMLElement | HTMLElement[], options?: SimpleParallaxOptions);
    refresh(): void;
    destroy(): void;
  }
}
  