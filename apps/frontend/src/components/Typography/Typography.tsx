import clsx from "clsx";

interface TypographyBaseProps<Element> {
  as?: "p" | Element;
  variant?: "h1" | "h2" | "body1" | "body2";
}

type TypographyProps<Element extends React.ElementType> =
  TypographyBaseProps<Element> &
    Omit<
      React.ComponentPropsWithoutRef<Element>,
      keyof TypographyBaseProps<Element>
    >;

function Typography<Element extends React.ElementType>({
  as = "p",
  className,
  ...rest
}: TypographyProps<Element>) {
  const Tag = as;
  const classes = clsx([className]);

  return <Tag className={classes} {...rest} />;
}

export { Typography };
export type { TypographyProps };
