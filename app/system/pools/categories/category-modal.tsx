import React from "react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex } from "@radix-ui/themes";
import { TextField } from '@radix-ui/themes';

import { DialogClose } from "@/components/ui/dialog";
import Modal, { type ModalProps } from '@/components/modal/Modal';

const schema = yup.object({
  name: yup.string().required('Name is required'),
});

type CategoryModalProps = {
  afterSave?: () => void;
} & ModalProps

export function CategoryModal({ afterSave, unmount, ...props }: CategoryModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    afterSave?.();
    console.log('Form Submitted:', data);
  };
  const footer = (
    <Flex gap="3" justify="end">
      <DialogClose asChild>
        <Button variant="soft" color="gray">
          Cancel
        </Button>
      </DialogClose>
      <Button color="blue" onClick={() => {
        afterSave?.();
        unmount?.();
      }}>Test</Button>
    </Flex>
  );

  return (
    <Modal title="Add Category" {...props} footer={footer} unmount={unmount}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root
          //defaultValue={state.value}
          // onChange={(e) => handleChange(e.target.value)}
          // onBlur={handleBlur}
          placeholder="Enter your name"
          {...register('name')}
        />
      </form>
    </Modal>
  );
}
