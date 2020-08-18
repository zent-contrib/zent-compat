export interface II18nLocaleCommon {
  confirm: string;
  cancel: string;
  ok: string;
  comma: string;
  reset: string;
}

export interface II18nLocaleTypeMap {
  image: string;
  voice: string;
}

export interface II18nLocaleUpload extends II18nLocaleCommon {
  title_voice: string;
  title_image: string;
  input: {
    holder: string;
    maxAmount(options: { maxAmount: number; type: string }): string;
    maxSize(options: { maxSize: number; type: string }): string;
    type(options: { type: string }): string;
  };
  popup: {
    web: string;
    group: string;
    holder: string;
    title_voice: string;
    title_image: string;
    type(options: { types: string[]; size: number }): string;
    extract: string;
    extracting: string;
  };
}

export interface II18nLocaleTable extends II18nLocaleCommon {
  emptyLabel: string;
}
