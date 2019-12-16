import {
  II18nLocaleCommon,
  II18nLocaleTypeMap,
  II18nLocaleUpload,
} from './locale';

const common: II18nLocaleCommon = {
  confirm: '确认',
  cancel: '取消',
  ok: '我知道了',
  comma: '，',
  reset: '重置',
};

export const mark = 'zh-CN';

const TypeMap: II18nLocaleTypeMap = {
  image: '图片',
  voice: '音频',
};

const TypeUnitMap = {
  image: '张',
  voice: '个',
};

export const Upload: II18nLocaleUpload = {
  ...common,
  title_voice: '声音选择',
  title_image: '图片选择',
  input: {
    holder: '添加',
    maxAmount({ maxAmount, type }) {
      return `最多上传 ${maxAmount} ${TypeUnitMap[type]}${TypeMap[type]}`;
    },
    maxSize({ maxSize, type }) {
      return `不能上传大于 ${maxSize} 的${TypeMap[type]}`;
    },
    type({ type }) {
      return `不能上传不支持的${TypeMap[type]}类型`;
    },
  },
  popup: {
    web: '网络图片',
    group: '上传至分组',
    holder: '请添加网络图片地址',
    title_voice: '本地音频',
    title_image: '本地图片',
    type({ types, size }) {
      return `仅支持 ${types.join('、')} ${
        types.length
      }种格式, 大小不超过${size}`;
    },
    extract: '提取',
    extracting: '提取中...',
  },
};
