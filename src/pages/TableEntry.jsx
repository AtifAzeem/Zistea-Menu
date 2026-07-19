import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

import { useTable } from "../context/TableContext";
import Home from "./Home";

function TableEntry() {
  const { tableId } = useParams();
  const { setTableNumber } = useTable();

  useEffect(() => {
    setTableNumber(Number(tableId));
  }, [tableId, setTableNumber]);

  if (isNaN(Number(tableId))) {
    return <Navigate to="/" replace />;
  }

  return <Home />;
}

export default TableEntry;