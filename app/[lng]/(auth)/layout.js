export default function AuthLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Testing header here!</nav>
 
      {children}
    </section>
  )
}