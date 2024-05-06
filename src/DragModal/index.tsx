import React, { useCallback, useEffect, useRef } from 'react';
import { Modal, ModalProps } from 'antd';

interface customProps extends ModalProps {
  dragable?: boolean;
  resetOnClose?: boolean
};
// dragable Modal
const DragModal: React.FC<customProps> = (props: any) => {
  const startGragRef = useRef<any>(null)
  const endGragRef = useRef<any>({ left: 0, top: 0 })
  useEffect(() => {
    const modalTitle = document.querySelector('.ant-modal-title')
    if (props.open) {
      if (modalTitle && props.dragable !== false) {
        (modalTitle as HTMLElement).style.cursor = 'move'
        registerEvents()
      }
      else {
        (modalTitle as HTMLElement).style.cursor = 'default'
      }
    } else {
      unRegisterEvents()
      if (props.resetOnClose) {
        setTimeout(() => {
          endGragRef.current = { left: 0, top: 0 }
          const modalContent = document.querySelector('.ant-modal-content')
          if (modalContent) {
            (modalContent as HTMLElement).style.left =
              '0';
            (modalContent as HTMLElement).style.top =
              '0'
          }
        }, 500)
      }
    }
  }, [props.open])
  useEffect(() => {
    return () => {
      unRegisterEvents()
    };
  }, [])
  const registerEvents = () => {
    const modalTitle = document.querySelector('.ant-modal-title')
    if (modalTitle) {
      modalTitle.addEventListener('mousedown', onMouseDwon)
    }
  }
  const unRegisterEvents = () => {
    startGragRef.current = null

    const modalTitle = document.querySelector('.ant-modal-title')
    if (modalTitle) {
      modalTitle.removeEventListener('mousedown', onMouseDwon)
    }
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  };
  // useCallback 可以解决removeEventListener失效问题
  const onMouseDwon =
    useCallback(
      (e: any) => {
        startGragRef.current = { startX: e.x, startY: e.y }
        document.body.onselectstart = () => false
        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('mouseup', onMouseUp)
      }
      , [])

  const onMouseMove =
    throttle(
      (e: MouseEvent) => {
        const { startX, startY } = startGragRef.current
        const { clientX, clientY } = e
        if (clientY > 10 && clientY < window.innerHeight - 10) {
          let { left, top } = endGragRef.current
          const offsetX = clientX - startX
          const offsetY = clientY - startY;
          (document.querySelector('.ant-modal-content') as HTMLElement)!.style.left =
            left + offsetX + 'px';
          (document.querySelector('.ant-modal-content') as HTMLElement)!.style.top =
            top + offsetY + 'px'
        }
      }
      , 30)
  const onMouseUp = () => {
    document.body.onselectstart = () => true
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
    setTimeout(() => {
      // 防止节流获取错误数据
      const content = document.querySelector('.ant-modal-content') as HTMLElement;
      endGragRef.current = { left: content.offsetLeft, top: content.offsetTop };
    }, 50)
  }
  return <Modal  {...props} />
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
export default DragModal
