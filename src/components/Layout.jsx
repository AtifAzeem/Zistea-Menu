function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-stone-200 flex justify-center">
      <main className="min-h-screen w-full max-w-md bg-[#FFFDF8] shadow-2xl">
        {children}
      </main>
    </div>
  );
}

export default Layout;