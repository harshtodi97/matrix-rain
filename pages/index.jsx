import React, { useEffect, useState } from "react";
import Matrix from "../components/Matrix";

const Canvas = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // console.log(width);
    // console.log(height);
    return <Matrix width={width} height={height} />;
  }

  return <div>loading....</div>;
};

export default Canvas;
