export const PrivateLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-shrink overflow-hidden">
       {/* <Sidebar /> */}

      <div className="scrollbar-gutter-stable w-full overflow-auto transition-all duration-300 ease-in-out">
        {/* {isIgnoreSidebarLayout ? null : <Header />}
        <Outlet /> */}
      </div>
    </div>
  );
}