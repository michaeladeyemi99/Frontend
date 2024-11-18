function TopBar() {
  return (
    <div className="flex justify-between px-10 pt-3 pb-3 bg-white border-2 dark:bg-black dark:border-gray-800 basis-1/12">
      <h1 className="text-black dark:text-white text-xl self-center">Platform Launch</h1>
      <button className="text-white bg-main_purple p-2 rounded-full self-center">Add New Task</button>
    </div>
  );
}

export default TopBar;
