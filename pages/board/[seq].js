import { Layout } from "antd";
import { withRouter } from "next/router";

const Detail = ({ router }) => {
  return (
    <Layout title={router.query.seq}>
      {router.query.seq}
      {router.query.title}
    </Layout>
  );
};

export default withRouter(Detail);
