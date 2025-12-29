import { Flex, Text, Button } from "@radix-ui/themes";
import { AlertButton } from "@/components/modal/show-modal";

export default function HomePage() {
  const handleHello = () => {
    console.log("hello world");
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <AlertButton />
        <Flex direction="column" gap="2">
			    <Text>Hello from Radix Themes :)</Text>
			    <Button>Lets go</Button>
		    </Flex>
      </main>
    </div>
  );
}
