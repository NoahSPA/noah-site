interface CardProps {
  title: string;
  description: string;
}

export function Card({ title, description }: CardProps) {
  return (
    <div className="grid gap-1 p-6 rounded-lg shadow-md bg-white dark:bg-gray-950">
      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
