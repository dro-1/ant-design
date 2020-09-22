import React, { useState } from "react";
import "./App.css";
import {
  Menu,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  Typography,
  Radio,
  Slider,
  InputNumber,
} from "antd";
import {
  DownOutlined,
  HomeOutlined,
  SmileOutlined,
  FileImageOutlined,
} from "@ant-design/icons";

function App() {
  const { SubMenu } = Menu;
  const { Title } = Typography;
  const [currentKey, setCurrentKey] = useState("home");
  const [currentGender, setCurrentGender] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const handleMenuClick = (e) => {
    setCurrentKey(e.key);
  };
  const handleSlider = (val) => {
    setSliderValue(val);
  };
  const handleRadioClick = (e) => {
    setCurrentGender(e.target.value);
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <div className="App">
      <Menu
        onClick={handleMenuClick}
        mode="horizontal"
        selectedKeys={currentKey}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="services" icon={<SmileOutlined />}>
          Services
        </Menu.Item>
        <SubMenu
          key="sub-menu"
          title={
            <span>
              Company
              <DownOutlined style={{ paddingLeft: 10, fontSize: 10 }} />
            </span>
          }
        >
          <Menu.ItemGroup>
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="contact">Contact</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="portfolio">Portfolio</Menu.Item>
        <Menu.Item key="Gallery" icon={<FileImageOutlined />}>
          Gallery
        </Menu.Item>
      </Menu>
      <Row
        justify="center"
        align="middle"
        style={{
          height: "80vh",
        }}
      >
        <Col span={12}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <Title
              level={2}
              style={{
                borderBottom: "solid 1px #f0f0f0",
                textAlign: "center",
                paddingBottom: 10,
              }}
            >
              {" "}
              Event Registration{" "}
            </Title>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please enter your desired date",
                },
              ]}
            >
              <DatePicker onChange={() => null} />
            </Form.Item>

            <Form.Item
              label="Time"
              name="time"
              rules={[
                {
                  required: true,
                  message: "Please enter your desired time",
                },
              ]}
            >
              <TimePicker onChange={() => null} />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please enter your gender",
                },
              ]}
            >
              <Radio.Group onChange={handleRadioClick}>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
                <Radio value={3}>Bi</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="Donation" name="donation">
              <Slider
                style={{
                  display: "inline-block",
                  paddingRight: 10,
                  width: "50%",
                }}
                min={1}
                onChange={handleSlider}
                value={sliderValue}
              />
              <InputNumber
                style={{
                  display: "inline-block",
                  margin: "0 16px",
                  position: "relative",
                  top: -8,
                }}
                min={1}
                onChange={handleSlider}
                value={sliderValue}
              />
            </Form.Item>

            <div style={{ textAlign: "center" }}>
              <Button
                style={{
                  width: "50%",
                }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
