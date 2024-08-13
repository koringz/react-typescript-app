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
                body.results = body.results? body.results: [{"gender":"male","name":{"title":"Mr","first":"Benjamin","last":"White"},"email":"benjamin.white@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/78.jpg","medium":"https://randomuser.me/api/portraits/med/men/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/78.jpg"},"nat":"CA"},{"gender":"male","name":{"title":"Mr","first":"Mathis","last":"Zwinkels"},"email":"mathis.zwinkels@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/57.jpg","medium":"https://randomuser.me/api/portraits/med/men/57.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/57.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"Mrs","first":"Colleen","last":"Van der Vinne"},"email":"colleen.vandervinne@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/92.jpg","medium":"https://randomuser.me/api/portraits/med/women/92.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/92.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"Ms","first":"Anel","last":"Guevara"},"email":"anel.guevara@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/72.jpg","medium":"https://randomuser.me/api/portraits/med/women/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/72.jpg"},"nat":"MX"},{"gender":"male","name":{"title":"Mr","first":"Gordon","last":"Fowler"},"email":"gordon.fowler@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/87.jpg","medium":"https://randomuser.me/api/portraits/med/men/87.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/87.jpg"},"nat":"IE"},{"gender":"female","name":{"title":"Miss","first":"Scarlett","last":"Armstrong"},"email":"scarlett.armstrong@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/94.jpg","medium":"https://randomuser.me/api/portraits/med/women/94.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/94.jpg"},"nat":"US"},{"gender":"female","name":{"title":"Mrs","first":"آنیتا","last":"قاسمی"},"email":"anyt.qsmy@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/77.jpg","medium":"https://randomuser.me/api/portraits/med/women/77.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/77.jpg"},"nat":"IR"},{"gender":"female","name":{"title":"Miss","first":"Mestan","last":"Nebioğlu"},"email":"mestan.nebioglu@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"Mr","first":"Benjamin","last":"Novak"},"email":"benjamin.novak@example.com","picture":{"large":"https://randomuser.me/api/portraits/men/68.jpg","medium":"https://randomuser.me/api/portraits/med/men/68.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/68.jpg"},"nat":"CA"},{"gender":"female","name":{"title":"Mrs","first":"Olivia","last":"Moreno"},"email":"olivia.moreno@example.com","picture":{"large":"https://randomuser.me/api/portraits/women/76.jpg","medium":"https://randomuser.me/api/portraits/med/women/76.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/76.jpg"},"nat":"AU"}]
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
