import { Button, Dialog, Flex, TextField, Text } from "@radix-ui/themes"
import Modal from "@/components/modal/Modal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required")
});

export function CategoryModal(props: { open: boolean }  ) {
	const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

	const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
		<Modal title="title"  description="description" {...props}>
			<form onSubmit={handleSubmit(onSubmit)}>

				<TextField.Root
					//defaultValue={state.value}
					// onChange={(e) => handleChange(e.target.value)}
					// onBlur={handleBlur}
					placeholder="Enter your name"
					{...register("name")}
				/>

			</form>
		</Modal>

  )
}
