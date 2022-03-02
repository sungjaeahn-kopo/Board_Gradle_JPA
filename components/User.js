import { Table, Tag, Space } from "antd";
import { useEffect } from "react";
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

  console.log("user length ::: ", user.length);
  if (user.length === 0) return null;

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((result) => {
      setUser(result);
      console.log(result);
    });
    console.log("user ::: ", user);
    return () => {};
  }, []);

  return <Table columns={columns} dataSource={user} />;
};

export default User;
