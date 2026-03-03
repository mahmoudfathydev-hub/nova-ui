import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "../../../lib/utils";
import { buttonVariants } from "./variants";
import { ButtonProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(buttonVariants({ variant, size, className }))}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <Loader2 size={16} className="animate-spin mr-2" aria-hidden="true" />
        )}
        {!isLoading && leftIcon && (
          <span className="flex shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
        {!isLoading && rightIcon && (
          <span className="flex shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
