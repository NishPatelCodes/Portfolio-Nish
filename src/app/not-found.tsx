import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col items-start justify-center px-5 py-24 md:px-8">
      <p className="text-sm uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="mt-4 text-6xl font-medium tracking-tight md:text-8xl">Oops!</h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        We couldn&apos;t find the page you were looking for
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </div>
  );
}
