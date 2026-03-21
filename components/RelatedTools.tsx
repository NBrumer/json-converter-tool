import { tools } from "../data/tools";
import ToolCard from "./ToolCard";

type RelatedToolsProps = {
  currentHref: string;
};

export default function RelatedTools({ currentHref }: RelatedToolsProps) {
  const related = tools.filter((tool) => tool.href !== currentHref).slice(0, 3);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-black">Related tools</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {related.map((tool) => (
          <ToolCard key={tool.href} tool={tool} />
        ))}
      </div>
    </section>
  );
}