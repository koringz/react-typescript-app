import React, { useEffect, useState } from 'react'
import { Collapse, Avatar, List, Card } from 'antd'

import './CollapseContent.scss'

interface DataType {
    gender: string
    name: {
        title: string
        first: string
        last: string
    }
    email: string
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    nat: string
}
const CollapseContent: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<DataType[]>([])

    const loadMoreData = () => {
        if (loading) {
            return
        }
        setLoading(true)
        fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
            .then(res => res.json())
            .then(body => {
                setData([...data, ...body.results])
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        loadMoreData()
    }, [])

    return (
        <>
            <Collapse
                ghost
                className="collapse-content"
                defaultActiveKey={['1']}
                items={[
                    {
                        key: '1',
                        label: '基本功能',
                        children: (
                            <div>
                                <List
                                    dataSource={data}
                                    renderItem={item => (
                                        <List.Item key={item.email}>
                                            <Card title={<Avatar src={item.picture.large} />}>{item.name.last}</Card>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        )
                    }
                ]}
            />
        </>
    )
}

export default CollapseContent
