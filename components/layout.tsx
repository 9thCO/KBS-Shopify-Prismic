interface LayoutProps {
  children: React.ReactNode;
}

export async function Layout(props: LayoutProps) {
  const { children } = props;

  return <div className="px-4 md:px-6">{children}</div>;
}
