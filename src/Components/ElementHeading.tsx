type ElementHeadingProps = {
  children: React.ReactNode;
};

const ElementHeading = (props: ElementHeadingProps) => {
  return <div>{props.children}</div>;
};

export default ElementHeading;
