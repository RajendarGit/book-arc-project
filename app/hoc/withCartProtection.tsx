import { useSelector } from "react-redux";
import { selectCartItems } from "@/app/features/cartSlice";
import { FC } from "react";
import { useRouter } from "next/navigation";

const withCartProtection = (WrappedComponent: FC) => {
  const ProtectedComponent: FC = (props) => {
    const cartItems = useSelector(selectCartItems);
    const router = useRouter();

    if (cartItems.length === 0) {
      router.replace("/shop");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withCartProtection;
