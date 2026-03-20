type ToolHeaderProps = {
  title: string;
  description: string;
};

export default function ToolHeader({
  title,
  description,
}: ToolHeaderProps) {
  return (
    <>
      <h1 className="mt-4 text-4xl font-bold">{title}</h1>
      <p className="mt-3 text-lg text-gray-600">{description}</p>
    </>
  );
}