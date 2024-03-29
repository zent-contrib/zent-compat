import * as React from 'react';
import { Component } from 'react';
import cx from 'classnames';
import { Portal } from '../portal';
import defer from 'zent/es/utils/defer';
import { WindowResizeHandler } from 'zent/es/utils/component/WindowResizeHandler';
import findPositionedParent from 'zent/es/utils/dom/findPositionedParent';
import { getViewportSize } from 'zent/es/utils/dom/getViewportSize';
import { WindowScrollHandler } from 'zent/es/utils/component/WindowScrollHandler';

import isEqualPlacement from './placement/isEqual';
import invisiblePlacement from './placement/invisible';
import { PositionFunction, IPopoverPosition } from './position-function';

export function isPositionVisible(rect) {
  const viewSize = getViewportSize();
  return !(rect.bottom < 0 || rect.top - viewSize.height > 0);
}

function translateToContainerCoordinates(containerBB, bb) {
  const { left, top } = containerBB;
  return {
    width: bb.width,
    height: bb.height,
    top: bb.top - top,
    left: bb.left - left,
    bottom: bb.bottom - top,
    right: bb.right - left,
  };
}

export interface IPopoverContentProps {
  prefix?: string;
  visible?: boolean;
  getAnchor?: () => Element;
  containerSelector?: string;
  getContentNode?: () => Element;
  placement?: PositionFunction;
  onPositionUpdated?: () => void;
  onPositionReady?: () => void;
  id?: string;
  className?: string;
  cushion?: number;
  anchor?: HTMLElement;
  container?: HTMLElement;
}

export interface IPopoverContentState {
  position: IPopoverPosition;
}

/**
 * Like triggers, content can be replaced with your own implementation, all you have to do is extend this base class.
 *
 * The props on this class are all private.
 */
export default class PopoverContent extends Component<
  IPopoverContentProps,
  IPopoverContentState
> {
  positionReady: boolean;
  positionedParent: Element | null;

  constructor(props) {
    super(props);
    this.state = {
      position: (invisiblePlacement as any)(props.prefix),
    };

    // 标记 content 的位置是否 ready
    this.positionReady = false;
  }

  getAnchor() {
    return this.props.getAnchor();
  }

  getPositionedParent() {
    // findPositionedParent returns null on fail
    if (this.positionedParent !== undefined) {
      return this.positionedParent;
    }

    const { containerSelector } = this.props;
    const container = document.querySelector(containerSelector);
    const parent = findPositionedParent(container, true);
    this.positionedParent = parent;
    return parent;
  }

  adjustPosition = () => {
    if (!this.props.visible) {
      return;
    }

    const content = this.props.getContentNode();

    // 可能还未渲染出来，先放到一个不可见的位置
    if (!content) {
      this.setState({
        position: (invisiblePlacement as any)(this.props.prefix),
      });
      defer(this.adjustPosition);
      return;
    }

    const contentBoundingBox = content.getBoundingClientRect();

    const anchor = this.getAnchor();
    if (!anchor) {
      return;
    }
    const boundingBox = anchor.getBoundingClientRect();

    const parent = this.getPositionedParent();
    if (!parent) {
      return;
    }
    const parentBoundingBox = parent.getBoundingClientRect();

    const relativeBB = translateToContainerCoordinates(
      parentBoundingBox,
      boundingBox
    );
    const relativeContainerBB = translateToContainerCoordinates(
      parentBoundingBox,
      parentBoundingBox
    );
    const position = this.props.placement(
      this.props.prefix,
      relativeBB,
      relativeContainerBB,
      {
        width: contentBoundingBox.width,
        height: contentBoundingBox.height,
      },
      {
        cushion: this.props.cushion,
        anchor,
        container: parent,
        anchorBoundingBoxViewport: boundingBox,
        containerBoundingBoxViewport: parentBoundingBox,
      }
    );
    if (!isEqualPlacement(this.state.position, position)) {
      this.setState(
        {
          position,
        },
        () => {
          this.props.onPositionUpdated();
          if (isPositionVisible(boundingBox) && !this.positionReady) {
            this.positionReady = true;
            this.props.onPositionReady();
          }
        }
      );
    }
  };

  onWindowResize = (_evt, delta) => {
    if (this.props.visible && (delta.deltaX !== 0 || delta.deltaY !== 0)) {
      this.adjustPosition();
    }
  };

  componentDidMount() {
    const { visible } = this.props;
    if (visible) {
      this.adjustPosition();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.visible && prevProps.visible !== this.props.visible) {
      // reset position mark
      this.positionReady = false;

      this.adjustPosition();
    }
  }

  render() {
    const {
      prefix,
      className,
      id,
      visible,
      children,
      containerSelector,
    } = this.props;
    const { position } = this.state;

    const cls = cx(className, `${prefix}-popover`, id, position.toString());

    return (
      <Portal
        visible={visible}
        selector={containerSelector}
        className={cls}
        style={position.getCSSStyle()}
      >
        <div className={`${prefix}-popover-content`}>
          {children}
          <WindowResizeHandler onResize={this.onWindowResize} />
          <WindowScrollHandler
            onScroll={this.adjustPosition}
            options={{ capture: true }}
          />
        </div>
      </Portal>
    );
  }
}
