import React, { PureComponent, useEffect, useState } from 'react'
import { Table, Avatar } from 'antd'

import { connect } from "react-redux";
import store from "@/store/store"

let getDataSource: any[] = []
for (let i = 0; i < 20; i += 1) {
    getDataSource.push({
        key: i,
        title: ['Light', 'Bamboo', 'Little'][i % 3],
        author: ['Light', 'Bamboo', 'Little'][i % 3],
        categories: 'Everything that has a beginning, has an end.',
    })
}

const SecondList = (props: any) => {
    const [state, setState] = useState({
        pageSize: 10,
        pageNum: 1,
        total: 0,
        loading: false,
    })
    const [dataSource, setDataSource] = useState(getDataSource)
    const columns = [
        {
            title: `标题`,
            dataIndex: 'title',
            key: 'title',
            width: 200
        },
        {
            title: `作者`,
            dataIndex: 'author',
            key: 'author',
            width: 200
        },
        {
            title: `分类`,
            dataIndex: 'categories',
            key: 'categories',
            width: 200
        },
    ]

    useEffect(() => {
        const unsuscribe = store.subscribe(() => {
            const getData = store.getState()
            // const tableFormList = props.tableForm
            const tableFormList = getData.tableData.tableFormList
            if (tableFormList && tableFormList.length) {
                getList()
            }
        })
        return () => {
            // 解绑
            unsuscribe()
        }
    }, [props.tableForm])

    // useEffect(() => {
    //     getList()
    // }, [])

    const getList = () => {
        console.log('props.tableForm=', props.tableForm)
        setDataSource(getDataSource)
    }
    const handleOnChange = (pageNum: number, pageSize: number) => {
        setState({
            ...state,
            ...{ pageSize, pageNum }
        })
        getList()
    }

    const { total, pageSize, pageNum } = state
    return (
        <div>
            {/* {JSON.stringify(props.tableForm)} */}
            <Table key={Math.random()}
                className='rc-antd-layout-pagination rc-antd-layout-table'
                columns={columns}
                dataSource={!dataSource ? [] : dataSource.map((item: any, index: number) => {
                    item.key = item.key || index
                    return item
                })}
                pagination={{
                    simple: false,
                    showSizeChanger: true,
                    showQuickJumper: true,
                    pageSize: pageSize,
                    total: total,
                    current: pageNum,
                    showTotal: (count) => {
                        let pageNum = Math.ceil(count)
                        return '共' + pageNum + '条'
                    },
                    onChange: handleOnChange
                }}
            />
        </div>
    )
}



function mapStateToProps(state: any) {
    return {
        tableForm: state.tableData.tableFormList
    }
}

export default connect(mapStateToProps, null)(SecondList)
