// use this only as type, @types/sortablejs and sortablejs cannot be used with `esModuleInterop: false`
import * as SortableJS from 'sortablejs';

// use this as value
const SortableJSValue: typeof SortableJS = (SortableJS as any).default;

const UNSORTABLE = 'unsortable';

export function initSortable(el, onMove) {
  let initState = [];
  const sortable = SortableJSValue.create(el, {
    filter: `.${UNSORTABLE}`,
    onStart() {
      initState = sortable.toArray();
    },
    onMove(evt) {
      return (evt.related.className !== UNSORTABLE) as any;
    },
    onEnd(evt) {
      const { newIndex, oldIndex } = evt;
      sortable.sort(initState);
      onMove(oldIndex, newIndex);
    },
  });
  return sortable;
}

export function swapArray(list, fromIndex, toIndex) {
  const result = Array.from([].concat(list));
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);
  return result;
}
