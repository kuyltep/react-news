import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton";
interface Props {
  isLoading: boolean;
}
function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type: "banner" | "item",
  count: number,
  direction: "row" | "column"
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton count={count} type={type} direction={direction} />;
    }
    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
