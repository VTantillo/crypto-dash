interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_AV_KEY: string
  readonly VITE_NOMICS_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
