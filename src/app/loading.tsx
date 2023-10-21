import { CircularProgress } from "@nextui-org/progress";

export default function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <CircularProgress aria-label="Loading..." />
    </section>
  );
}
