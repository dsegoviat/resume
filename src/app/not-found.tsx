import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
        gap: "0.8rem",
        padding: "1.5rem",
      }}
    >
      <h1>404</h1>
      <p>This page is not available yet.</p>
      <Link href="/">Return to resume</Link>
    </main>
  );
}
