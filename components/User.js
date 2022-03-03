import { Table, Tag, Space, Skeleton } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getUser } from "../services/UserService";

const User = () => {
  const columns = [
    {
      title: "CustomerNo",
      dataIndex: "customerNo",
      key: "customerNo",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.customerNo - b.customerNo,
    },
    {
      title: "CustomerId",
      dataIndex: "customerId",
      key: "customerId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "CustomerName",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "SignDate",
      dataIndex: "signDate",
      key: "signDate",
    },
    {
      title: "UpdateDate",
      dataIndex: "updateDate",
      key: "updateDate",
    },
  ];

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    setLoading("true");
    console.log("!!!!!!!!!!!!!");
    getUser().then((user) => {
      setUser(user);
    });
    setLoading("false");
  }, []);

  // console.log("user length ::: ", user.length);
  // if (user.length === 0) return null;

  return <Table columns={columns} dataSource={user} />;
};

export default User;
