function BodyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 ">
        {children}
      </div>
    </>
  );
}

export default BodyWrapper;
