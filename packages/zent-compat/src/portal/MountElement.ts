import { useIsomorphicLayoutEffect } from 'zent/es/utils/hooks/useIsomorphicLayoutEffect';

export interface IMountElementProps {
  node: HTMLElement;
  getParent(selector: Element | string): Element;
  selector: Element | string;
}

const MountElement = ({ node, getParent, selector }: IMountElementProps) => {
  useIsomorphicLayoutEffect(() => {
    const parent = getParent(selector);
    parent.appendChild(node);
    return () => {
      parent.removeChild(node);
    };
  }, [node, selector, getParent]);
  return null;
};

export default MountElement;
