
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {children}
            <h3>LAYOUT GROUP</h3>
        </>
    );
  }
  