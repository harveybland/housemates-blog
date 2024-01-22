export default function Avatar({
  name,
  width,
  height,
  fontSize,
}: {
  name: string;
  width?: string;
  height?: string;
  fontSize?: string;
}) {
  return (
    <div className="relative inline-block">
      <div
        className={`${width || "w-10"} ${height || "h-10"} bg-brand-leaf text-${
          fontSize || "xl"
        } text-white rounded-full flex items-center justify-center`}
      >
        {name.slice(0, 1).toUpperCase()}
      </div>
    </div>
  );
}
