import { Table, Tag, Space } from "antd";

const User = ({ user }) => {
  const columns = [
    {
      title: "CustomerNo",
      dataIndex: "customerNo",
      key: "customerNo",
    },
    {
      title: "CustomerId",
      dataIndex: "customerId",
      key: "customerId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
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

  return <Table columns={columns} dataSource={user} />;
};

export default User;
