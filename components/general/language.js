import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Language({ text, texto }) {
  const router = useRouter();
  useEffect(() => {
    console.log(router.locale);
  }, [router.locale]);
  return <>{router.locale == "es" ? texto : text}</>;
}
