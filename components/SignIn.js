import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import React, { useState } from "react";

const SignIn = () => {
  const [inputs, setInputs] = useState({
    customerId: "",
    customerName: "",
    password: "",
  });

  // antd
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange(e) {
    // e.target에서 값 추출
    console.log(
      "onChange ::: ",
      customerId.value,
      customerName.value,
      password.value
    );
    setInputs({
      ...inputs, // 기존 input 객체 복사
      customerId: customerId.value,
      customerName: customerName.value,
      password: password.value,
    });
  }

  function onSubmit(e) {
    console.log("before onSubmit ::: ", inputs);
    console.log("title ::: ", customerId.value);
    console.log("writer ::: ", customerName.value);
    console.log("content ::: ", password.value);
    setInputs({
      ...inputs,
      customerId: customerId.value,
      customerName: customerName.value,
      password: password.value,
    });

    fetch("/api/user/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={onSubmit}
    >
      <Form.Item name="size">
        <Radio.Group>
          <Radio.Button value="default">SignIn</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="CustomerId"
        name="customerId"
        value={inputs.customerId}
        onChange={onChange}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="CustomerName"
        name="customerName"
        value={inputs.customerName}
        onChange={onChange}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        value={inputs.password}
        onChange={onChange}
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      {/* <Form.Item label="Select">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="TreeSelect">
        <TreeSelect
          treeData={[
            {
              title: "Light",
              value: "light",
              children: [
                {
                  value: "Bamboo",
                  value: "bamboo",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: "Hello",
              label: "hello",
              children: [
                {
                  value: "Hi",
                  label: "hi",
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item> */}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          SignIn
        </Button>
      </Form.Item>
    </Form>

    // <div>
    //   <h4>new Post</h4>
    //   <form onSubmit={onSubmit}>
    //     <div>
    //       <label>title</label>
    //       <input type="text" name="title" value={title} onChange={onChange} />
    //     </div>
    //     <div>
    //       <label>writer</label>
    //       <input type="text" name="writer" value={writer} onChange={onChange} />
    //     </div>
    //     <div>
    //       <label>content</label>
    //       <input
    //         type="text"
    //         name="content"
    //         value={content}
    //         onChange={onChange}
    //       />
    //     </div>
    //     <div>
    //       <button type="submit">작성</button>
    //     </div>
    //   </form>
    //   <Link href="/board/list">
    //     <button>목록으로</button>
    //   </Link>
    // </div>
  );
};

export default SignIn;
