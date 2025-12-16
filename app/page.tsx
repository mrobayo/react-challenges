// import {Button} from "@/components/ui/button";
import { Flex, Text, Button } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Button className="capitalize py-8">
          hello world
        </Button>

        <Flex direction="column" gap="2">
			    <Text>Hello from Radix Themes :)</Text>
			    <Button>Lets go</Button>
		    </Flex>

      </main>
    </div>
  );
}
