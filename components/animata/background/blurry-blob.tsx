import { cn } from "@/lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute -right-30 -top-20 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>

        <div
          className={cn(
            "absolute -right-0 -bottom-80 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-60 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>
        <div
          className={cn(
            "absolute -right-60 -bottom-80 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-60 mix-blend-multiply blur-3xl filter",
            className,
            firstBlobColor,
          )}
        ></div>

        <div
          className={cn(
            "absolute -left-0 -top-10 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor,
          )}
        ></div>

        <div
          className={cn(
            "absolute -left-20 -bottom-80 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
            className,
            secondBlobColor,
          )}
        ></div>
      </div>
    </div>
  );
}
