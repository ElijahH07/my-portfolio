import { ReactNode } from "react";

interface IconButtonProps {
  /**
   * Icon component to display
   */
  icon: ReactNode;
  /**
   * Button link
   */
  href: string;
  /**
   * Aria label for accessibility
   */
  label: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

export default function IconButton({ 
  icon, 
  href, 
  label,
  className = ""
}: IconButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`group inline-flex items-center justify-center w-12 h-12 text-white hover:text-yellow-300 transition-all hover:scale-110 ${className}`}
    >
      {icon}
    </a>
  );
}