import React from "react";

import { useRouter } from "next/router";
type Props = {};

export default function (props: Props) {
  const router = useRouter();
  console.log("profile id", router.query.id);
  return <div>{router.query.id}</div>;
}
