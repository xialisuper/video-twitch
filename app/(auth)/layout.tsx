import Logo from "./_components/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Logo />
      {children}
    </div>
  );
}
