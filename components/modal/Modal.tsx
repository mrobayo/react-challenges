'use client';

import React from 'react';
import { Flex } from '@radix-ui/themes';
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
import { Button } from "@/components/ui/button";

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
  action?: {
    label: string;
    onClick: () => void;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  }
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
  action,
}: ModalProps) {
  const defaultFooter = (
    <Flex gap="8px" justify="end" pt="16px">
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
      { action ? (
        <Button onClick={action.onClick} variant={action.variant}>{action.label}</Button>
      ): (
        <DialogClose asChild>
          <Button color="blue">Confirm</Button>
        </DialogClose>
      )}
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
