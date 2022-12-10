import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "Gender",
        accessor: "gender"
      },
      {
        Header: "IP address",
        accessor: "ip_address"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Time",
        accessor: "time"
      },
      {
        Header: "Mobile",
        accessor: "mobile"
      },
      {
        Header: "Area",
        accessor: "area"
      },
      {
        Header: "Show",
        accessor: "show"
      },
      {
        Header: "Edit",
        accessor: "edit"
      }
    ],
    []
  );

  return columns;
}
