"use client";

import { TableProps } from "antd";
import Table from "./index";

export default function ScrollableTable<T>({
  scroll,
  ...props
}: TableProps<T>) {
  return (
    <Table
      scroll={{
        y: scroll?.y,
        x: props.columns?.reduce(
          (acc, col) => acc + Number(col?.width || 0),
          0
        ),
      }}
      {...props}
    />
  );
}
