import PersonaSubNav from '../../components/layout/PersonaSubNav'

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <PersonaSubNav />
      <div style={{ paddingTop: 'calc(var(--nav-h) + var(--sub-nav-h))' }}>
        {children}
      </div>
    </>
  )
}
