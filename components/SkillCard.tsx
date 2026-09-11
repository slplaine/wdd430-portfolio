interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
      <h3 className="mb-2 text-xl font-bold">{title}</h3>

      <p className="text-gray-600">{description}</p>
    </div>
  );
}