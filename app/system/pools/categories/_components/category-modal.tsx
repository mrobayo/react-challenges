import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Flex, Text } from '@radix-ui/themes';

import Modal, { type ModalProps } from '@/components/modal/Modal';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data) => {
    console.log('Submitted:', data);
    console.log('Form save:', getValues());
    afterSave?.();
    // unmount?.();
  };

  return (
    <Modal
      title="Add Category"
      {...props}
      action={{
        label: 'Save',
        onClick: () => {
          formRef.current.requestSubmit();
        },
      }}
      unmount={unmount}>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column" gap="8px">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" {...register('name')} />
          {errors.name && (
            <Box className="-mt-2">
              <Text weight="light" size="1" className="text-red-700">
                {errors.name.message}
              </Text>
            </Box>
          )}
        </Flex>
      </form>
    </Modal>
  );
}
