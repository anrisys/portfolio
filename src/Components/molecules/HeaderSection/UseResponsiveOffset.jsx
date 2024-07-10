import { useEffect, useState } from "react";

function useResponsiveOffest() {
  const getOffset = () => {
    return window.innerWidth < 768 ? -300 : -70;
  };

  const [offset, setOffset] = useState(getOffset());

  useEffect(() => {
    const handleResize = () => {
      setOffset(getOffset());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return offset;
}

export default useResponsiveOffest;
