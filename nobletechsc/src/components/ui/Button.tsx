import clsx from 'clsx';
import React from 'react';

// Minimal inline cva to avoid extra dependency if not installed; fallback simple variant system.
const buttonStyles = ({ variant, size }: { variant?: string; size?: string }) => {
  const base = 'btn relative';
  const variants: Record<string,string> = {
    primary: 'text-white',
    outline: 'btn-outline',
    subtle: 'bg-[rgba(0,82,204,.06)] text-[--color-primary-600] hover:bg-[rgba(0,82,204,.12)]',
  };
  const sizes: Record<string,string> = {
    sm: 'py-2 px-4 text-sm',
    md: '',
    lg: 'text-base py-3 px-6',
  };
  return clsx(base, variants[variant || 'primary'], sizes[size || 'md']);
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'subtle';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref
) {
  const classes = clsx(buttonStyles({ variant, size }), className);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as any, {
      className: clsx(classes, (children as any).props?.className),
      ref,
      ...props
    });
  }
  return <button ref={ref} className={classes} {...props}>{children}</button>;
});
