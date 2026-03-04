export function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Sowmya Tiwari. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Designed with purpose. Built with precision.
        </p>
      </div>
    </footer>
  )
}
