"use client";

import { useEffect, useState } from "react";






import EditModal from "@/components/modals/EditModal";

export const EditProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <EditModal />
    </>
  );
}