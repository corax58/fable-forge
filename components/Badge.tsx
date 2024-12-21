const Badge = ({ status }: { status: string }) => {
  if (status == "InProgress")
    return (
      <div className="px-2  bg-yellow-200 text-yellow-700 rounded-full text-sm">
        In Progress
      </div>
    );
  else
    return (
      <div className="px-2  bg-green-200 text-green-700 rounded-full text-sm">
        Completed
      </div>
    );
};

export default Badge;
