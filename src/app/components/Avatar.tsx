export default function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-block">
      <div className="w-10 h-10 bg-brand-leaf text-white text-lg rounded-full flex items-center justify-center">
        {name.slice(0, 1).toUpperCase()}
      </div>
    </div>
  );
}
