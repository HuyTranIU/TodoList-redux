import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { useState } from 'react'
import { todoRemainingSelector } from '../../redux/selectors'

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoLists = useSelector(todoRemainingSelector)

  console.log(todoLists);

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }

  const handleAddButtonClick = () => {
    dispatch(
      addTodo(
        {
          id: new Date().valueOf(),
          name: todoName,
          completed: false,
          priority: priority
        }
      ))
    setTodoName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoLists.map((todo) =>
          <Todo 
          key={todo.id} 
          name={todo.name} 
          id={todo.id}
          priority={todo.priority} 
          completed={todo.completed}
          />
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button
            type='primary'
            onClick={handleAddButtonClick}
          >
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
