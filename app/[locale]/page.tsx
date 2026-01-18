import { ContactForm } from "@/entities";

export default function Home() {
  return (
    <section className=" min-h-450  bg-background text-foreground section container flex flex-col gap-6 p-6">
      <ContactForm />
    </section>
  );
}
