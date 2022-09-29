import { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Row, Col, Typography, message } from 'antd'
import { getTeams, assignTask } from './services'

const { Option } = Select
const { Title } = Typography

function App() {
    const [taskAssignment] = Form.useForm()
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTeams()
            setTeams(data)
        }
        fetchData()
    }, [])

    const onFinish = (values) => {
        assignTask(values)
            .then(data => message.success(data.message))
            .catch(err => message.error(err.message ?? 'Some error happened'))
    };

    const teamOptions = () => teams?.map(team => <Option key={team._id} value={team._id}>{team.name}</Option>)

    return (
        <Row style={{ marginTop: 16 }}>
            <Col span={16} offset={4}>
                <Title>Task Assignment Form</Title>
                <Form
                    size='large'
                    layout='vertical'
                    form={taskAssignment}
                    name="task-assignment"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="name"
                        label="Task Name"
                        rules={[{ required: true }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="teamId"
                        label="Team"
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="Select the team"
                            allowClear
                        >
                            {teamOptions()}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Assign
                        </Button>
                    </Form.Item>
                </Form> 
            </Col>
        </Row>
        
    );
}

export default App;
