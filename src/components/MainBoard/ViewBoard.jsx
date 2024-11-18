function ViewBoard() {
  return (
    <div className="bg-[#F4F7FD] dark:bg-[#20212C]  dark:text-white flex flex-col justify-center items-center basis-11/12">
      <p>This board is empty. Create a new Column to get started</p>
      <button className="text-white bg-main_purple p-4 rounded-full w-40">Add New Column</button>
    </div>
  );
}

export default ViewBoard;
