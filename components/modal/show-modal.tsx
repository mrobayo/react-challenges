'use client';

import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Flex, Text, Button } from '@radix-ui/themes';
import { DialogClose } from '@/components/ui/dialog';
import Modal, { type ModalProps } from '@/components/modal/Modal';

export function showModal<P extends Omit<ModalProps, 'open' | 'unmount'>>(
  Component: React.ComponentType<P>,
  props: P
) {
  const mountNode = document.createElement('div');
  const modalRoot = document.body; //document.getElementById('modal-root') ??
  modalRoot.appendChild(mountNode);
  const root = createRoot(mountNode);

  const ModalHost = ({ mountPoint }: { mountPoint: Root }) => {
    const [open, setOpen] = React.useState(true);

    const handleOpenChange = (next: boolean) => {
      setOpen(next);
      if (!next) {
        requestAnimationFrame(() => {
          mountPoint.unmount();
          mountNode.remove();
        });
      }
    };
    return <Component {...props} open={open} unmount={() => handleOpenChange(false)} />;
  };

  root.render(<ModalHost mountPoint={root} />);
  return () => root.unmount();
}

type AlertModalProps = Omit<ModalProps, 'children'>;
export function AlertModal(props: AlertModalProps) {
  return (
    <Modal {...props}>
      <Text>{props.description}</Text>
      <AlertButton />
    </Modal>
  );
}

export function AlertButton() {
  const handleClick = () => {
    showModal(AlertModal, {
      title: 'Alert',
      description: 'hello world',
      footer: (
        <Flex justify="end">
          <DialogClose asChild>
            <Button color="orange">Dismiss</Button>
          </DialogClose>
        </Flex>
      ),
    });
  };
  return <Button onClick={handleClick}>Show alert</Button>;
}
