import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Invite() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return null;
}
