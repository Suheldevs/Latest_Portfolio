/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms access key — see .env.example. Contact form falls back to
   *  mailto: when this is unset. */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
