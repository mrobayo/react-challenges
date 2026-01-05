'use client';

import React from 'react';
import { Flex, Button } from '@radix-ui/themes';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export type ModalProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  open?: boolean;
  unmount?: () => void;
  className?: string;
  showCloseButton?: boolean;
  footer?: React.ReactNode;
};

export default function Modal({
  title,
  description,
  children,
  trigger,
  open,
  unmount,
  className,
  showCloseButton,
  footer,
}: ModalProps) {
  const defaultFooter = (
    <Flex gap="3" justify="end">
      <DialogClose asChild>
        <Button variant="soft" color="gray">
          Close
        </Button>
      </DialogClose>
      <DialogClose asChild>
        <Button color="blue">Confirm</Button>
      </DialogClose>
    </Flex>
  );

  return (
    <Dialog open={open} onOpenChange={unmount}>
      {trigger && (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      )}
        <DialogContent
          className={className}
          showCloseButton={showCloseButton}
          style={{
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 24,
          }}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          <Flex direction="column" gap="4">
            <Flex justify="between" align="center"></Flex>
            <Flex direction="column" gap="3">
              {children}
            </Flex>
            {footer ?? <DialogFooter>{defaultFooter}</DialogFooter>}
          </Flex>
        </DialogContent>
    </Dialog>
  );
}
