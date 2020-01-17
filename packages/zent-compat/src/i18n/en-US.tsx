import {
  II18nLocaleCommon,
  II18nLocaleUpload,
  II18nLocaleTypeMap,
} from './locale';

const common: II18nLocaleCommon = {
  confirm: 'Confirm',
  cancel: 'Cancel',
  comma: ', ',
  ok: 'OK',
  reset: 'Reset',
};

export const mark = 'en-US';

const TypeMap: II18nLocaleTypeMap = {
  image: 'Image',
  voice: 'Audio',
};

export const Upload: II18nLocaleUpload = {
  ...common,
  title_voice: 'Choose voice',
  title_image: 'Choose image',
  input: {
    holder: 'Add',
    maxAmount({ maxAmount, type }) {
      return `Only ${maxAmount} ${TypeMap[type]} files can be added`;
    },
    maxSize({ maxSize, type }) {
      return `Cannot upload ${TypeMap[type]} files larger than ${maxSize}`;
    },
    type({ type }) {
      return `Cannot upload ${TypeMap[type]} files with unsupported type`;
    },
  },
  popup: {
    web: 'Web image',
    group: 'Group',
    holder: 'Image url',
    title_voice: 'Local audio',
    title_image: 'Local image',
    type({ types, size }) {
      return `Supports ${types.join(' /')} only, smaller than ${size}`;
    },
    extract: 'Extract',
    extracting: 'Extracting...',
  },
};
