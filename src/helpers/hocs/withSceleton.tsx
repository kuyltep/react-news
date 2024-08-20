import Skeleton from "../../components/Skeleton/Skeleton";

function withSkeleton(
  Component,
  type: "banner" | "item",
  count: number,
  direction: "row" | "column"
) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...restProps} />;
  };
}

export default withSkeleton;
