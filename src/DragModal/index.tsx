import React, { useEffect, useRef } from 'react';
import { Modal, ModalProps } from 'antd';

interface customProps extends ModalProps {
  dragable?: boolean;
  resetOnClose?: boolean
};
// dragable Modal
const DragModal: React.FC<customProps> = (props: any) => {
  const startGragRef = useRef<any>(null);
  const endGragRef = useRef<any>({ left: 0, top: 0 });
  useEffect(() => {
    if (props.open) {
      const modalTitle = document.querySelector('.ant-modal-title');
      if (modalTitle && props.dragable !== false) {
        (modalTitle as HTMLElement).style.cursor = 'move';
        registerEvents();
      }
    } else {
      unRegisterEvents();
      if (props.resetOnClose) {
        setTimeout(() => {
          endGragRef.current = { left: 0, top: 0 };
          const modalContent = document.querySelector('.ant-modal-content');
          if (modalContent) {
            (modalContent as HTMLElement).style.left =
              '0';
            (modalContent as HTMLElement).style.top =
              '0';
          }
        }, 500);
      }
    }
  }, [props.open]);
  useEffect(() => {
    return () => {
      unRegisterEvents();
    };
  }, []);
  const registerEvents = () => {
    const modalTitle = document.querySelector('.ant-modal-title');
    if (modalTitle) {
      modalTitle.addEventListener('mousedown', onMouseDwon);
    }
  };
  const unRegisterEvents = () => {
    startGragRef.current = null;
    const modalTitle = document.querySelector('.ant-modal-title');
    if (modalTitle) {
      modalTitle.removeEventListener('mousedown', onMouseDwon);
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDwon = (e: any) => {
    startGragRef.current = e;
    document.body.onselectstart = () => false;
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = throttle((e: MouseEvent) => {
    const { x, y } = startGragRef.current;
    const { clientX, clientY } = e;
    let { left, top } = endGragRef.current;
    const x1 = clientX - x;
    const y1 = clientY - y;
    (document.querySelector('.ant-modal-content') as HTMLElement)!.style.left =
      left + x1 + 'px';

    (document.querySelector('.ant-modal-content') as HTMLElement)!.style.top =
      top + y1 + 'px';
  }, 30)
  const onMouseUp = () => {
    document.body.onselectstart = () => true;
    let { style } = document.querySelector('.ant-modal-content') as HTMLElement;
    endGragRef.current = { left: parseInt(style.left.replace('px', '') || '0'), top: parseInt(style.top.replace('px', '') || '0') };
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };
  return <Modal  {...props} />;
};
function throttle(fn: any, delay: number) {
  let timer: any = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        clearTimeout(timer)
        timer = null
      }, delay)
    }
  }
}
export default DragModal;
