export function Footer() {
  return (
    <footer className="border-border mt-16 border-t">
      <div className="text-muted mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} Charuna Amarasinghe. All rights reserved.</p>
      </div>
    </footer>
  );
}
