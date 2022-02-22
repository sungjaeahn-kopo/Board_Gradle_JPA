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
// import Link from "next/link";
import React, { useState } from "react";

const PostBoard = () => {
  const [inputs, setInputs] = useState({
    title: "",
    writer: "",
    content: "",
  });
  // 비구조화 할당
  // const { title, writer, content } = inputs;

  // antd
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  function onChange(e) {
    // e.target에서 값 추출
    console.log("onChange ::: ", title.value, writer.value, content.value);
    setInputs({
      ...inputs, // 기존 input 객체 복사
      // [e.target.name]: e.target.value, // name 키를 가진 값을 value로 설정
      // setTitle(title),
      // setWriter(writer),
      // setContent(content)
      title: title.value,
      writer: writer.value,
      content: content.value,
    });
  }

  function onSubmit(e) {
    console.log("before onSubmit ::: ", inputs);
    console.log("title ::: ", title.value);
    console.log("writer ::: ", writer.value);
    console.log("content ::: ", content.value);
    setInputs({
      ...inputs,
      title: title.value,
      writer: writer.value,
      content: content.value,
      // [e.target.name]: e.target.value,
    });
    // setInputs({
    //   ...inputs, // 기존 input 객체 복사
    //   // [e.target.name]: e.target.value, // name 키를 가진 값을 value로 설정
    // });

    fetch("/api/save", {
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
      lablCol={{
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
          {/* <Radio.Button value="small">Small</Radio.Button> */}
          <Radio.Button value="default">Posting a Board</Radio.Button>
          {/* <Radio.Button value="large">Large</Radio.Button> */}
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Title"
        name="title"
        value={inputs.title}
        onChange={onChange}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Writer"
        name="writer"
        value={inputs.writer}
        onChange={onChange}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Content"
        name="content"
        value={inputs.content}
        onChange={onChange}
      >
        <Input />
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
          Submit
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

// class PostBoard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: "",
//       writer: "",
//       content: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//   }

//   onChange(e) {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     const post = {
//       title: this.state.title,
//       writer: this.state.writer,
//       content: this.state.content,
//     };

//     fetch("/api/save", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(post),
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }

//   goToList(e) {}

//   render() {
//     const { title, writer, content } = this.state;
//     const { onChange, onSubmit, goToList } = this;

//     return (
//       <div>
//         <h4>new Post</h4>
//         <form onSubmit={onSubmit}>
//           <div>
//             <label>title</label>
//             <input type="text" name="title" value={title} onChange={onChange} />
//           </div>
//           <div>
//             <label>writer</label>
//             <input
//               type="text"
//               name="writer"
//               value={writer}
//               onChange={onChange}
//             />
//           </div>
//           <div>
//             <label>content</label>
//             <input
//               type="text"
//               name="content"
//               value={content}
//               onChange={onChange}
//             />
//           </div>
//           <div>
//             <button type="submit">작성</button>
//           </div>
//         </form>
//         <Link href="/board/list">
//           <button>목록으로</button>
//         </Link>
//       </div>
//     );
//   }
// }

export default PostBoard;
