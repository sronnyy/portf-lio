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
  
  