'use client';
import { Flex, Text, Button } from '@radix-ui/themes';
import { useModal } from '@/components/modal/modal-provider';
import Modal from '@/components/modal/Modal';
import { CategoryModal } from '@/app/system/pools/categories/category-modal';
import { showModal } from '@/components/modal/modal-utils';

// function TestModal({ userId }: { userId: string }) {
//   return (
//     <Modal title="title" description="description">
//       <p> hola test </p>
//     </Modal>
//   )
// }

export function TestButton({}) {
  // const { openModal } = useModal();

  const handleHello = () => {
    const userId = '99A';
    // openModal(<TestModal />, { userId });
    showModal(<CategoryModal />);
  };
  return (
    <Button className="capitalize py-8" onClick={handleHello}>
      hello world
    </Button>
  );
}
