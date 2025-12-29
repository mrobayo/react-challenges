'use client';

import React from 'react';
import { Flex, Text, Button } from '@radix-ui/themes';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
type ModalProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  footer?: React.ReactNode;
};

export default function Modal({ title, description, children, open, onOpenChange, footer }: ModalProps) {
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.45)',
          }}
        />
        <DialogContent
          // maxWidth="450px"
          // showCloseButton={false}
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
            {footer ?? defaultFooter}
          </Flex>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
