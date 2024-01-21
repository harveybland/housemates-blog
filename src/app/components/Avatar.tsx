export default function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-block">
      <div className="w-8 h-8 bg-brand-leaf text-white text-md rounded-full flex items-center justify-center">
        {name.slice(0, 1).toUpperCase()}
      </div>
    </div>
  );
}
