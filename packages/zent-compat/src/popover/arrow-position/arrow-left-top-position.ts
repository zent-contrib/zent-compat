import { ArrowOffsetVertical } from 'zent/es/constants';

import { PositionFunctionImpl } from '../position-function';
import createPlacement from '../placement/create';
import createArrowPosition from './create';

const locate: PositionFunctionImpl = (
  anchorBoundingBox,
  containerBoundingBox,
  contentDimension,
  options
) => {
  const x = anchorBoundingBox.left - contentDimension.width - options.cushion;
  const middle = (anchorBoundingBox.top + anchorBoundingBox.bottom) / 2;
  const y = middle - ArrowOffsetVertical;

  return createArrowPosition(x, y, `left-top`);
};

const ArrowLeftTopPosition = createPlacement(locate);

export default ArrowLeftTopPosition;
