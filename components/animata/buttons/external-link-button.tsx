import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface ButtonTitleProps {
  text: string;
  href?: string;
  className?: string;
}

export default function ExternalLinkButton({ 
  text = "Open Link", 
  href = "#",
  className = ""
}: ButtonTitleProps) {
  const content = (
    <>
      <span>{text}</span>
      <ArrowTopRightIcon
        height={20}
        width={20}
        className="opacity-75 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-yellow-300 group-hover:opacity-100"
      />
    </>
  );

  const Tag = href && href !== "#" ? "a" : "button";
  const linkProps = Tag === "a" ? { 
    href, 
    target: "_blank", 
    rel: "noopener noreferrer" 
  } : {};

  return (
    <div className={`relative inline-block group ${className}`}>
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Button */}
      <Tag
        {...linkProps}
        className="relative flex items-center gap-1 px-6 py-3 bg-black text-white rounded-lg border-2 border-transparent bg-clip-padding hover:text-yellow-300 transition-all no-underline"
        style={{
          backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
      >
        {content}
      </Tag>
    </div>
  );
}