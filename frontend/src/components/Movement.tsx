import { cn } from "../utils/cn";

export const Movement = ({
  className,
  amount,
  date,
  type,
  icon,
  color,
}: {
  className?: string;
  amount?: string | React.ReactNode;
  date?: string | React.ReactNode;
  type?: string;
  icon?: string[];
  color: string;
}) => {
  return (
    <div
      className={cn(
        `${color} mb-1 row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-row space-y-4 font-bold`,
        className
      )}
    >
      {type}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-normal text-xs text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {date}
        </div>
        <div className={`font-sans font-bold ${color} dark:text-neutral-300`}>
          {`${amount}€`}
        </div>
      </div>
    </div>
  );
};
