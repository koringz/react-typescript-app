/*  描述: 主页
 *  作者: koringz
 *  日期: 2021-10-30
 */

import React, { PureComponent } from 'react'
import { message, Table, Space, Layout } from 'antd'
import SearchForm from './SearchForm'
import RCDialog from './components/RCDialog'

const { Content } = Layout

let getDataSource: any[] = []
for (let i = 0; i < 20; i += 1) {
    getDataSource.push({
        key: i,
        name: ['Light', 'Bamboo', 'Little'][i % 3],
        timer: ['Light', 'Bamboo', 'Little'][i % 3],
        description: 'Everything that has a beginning, has an end.',
    })
}

class Home extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            // 搜索
            searchFormParams: {},
            // 列表
            columns: [
                {
                    title: '用户名',
                    dataIndex: 'name'
                },
                {
                    title: '时间',
                    dataIndex: 'timer'
                },
                {
                    title: '描述',
                    dataIndex: 'description'
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    // render: (text: any, record: any) => {
                    //     return (
                    //         <Space size="middle" className='rc-antd-layout-table-operation'>
                    //             <a key={Math.random().toString(36).substring(1, 14)} onClick={() => this.handleCheck(true, record)}>
                    //                 <span>查看3</span>
                    //             </a>
                    //         </Space>
                    //     )
                    // }
                }
            ],
            dataSource: getDataSource,
            pageSize: 10,
            pageNum: 1,
            total: 0,
            loading: false,
            // 其他
            isCheck: false,
            snapshot: {},
        }
        this.handleCheck.bind(this)
    }
    /**
     * 搜索
     */
    async handleSearch() {
        this.setState({ loading: true })
        const params = this.getParamers()
        React.$api.getshow && React.$api.getshow(params).then((res: any) => {
            if (res.data.code == 200) {
                const DATA = res.data.data
                this.resetStateData(DATA)
            }
            else {
                message.error(res.data.message)
            }
        })
    }

    getParamers() {
        const searchFormParams = this.state.searchFormParams as any
        const params = { ...this.state, ...searchFormParams }
        return {
            pageSize: params.pageSize,
            pageNum: params.pageNum,
        }
    }
    resetStateData(DATA: any) {
        this.setState({
            loading: false,
            dataSource: DATA,
            total: DATA.total,
            pageSize: DATA.pageSize
        })
    }
    changeSearchForm() {
    }

    /**
     * 页码
     * @param pageNum 
     * @param pageSize 
     */
    handleOnChange(pageNum: number, pageSize: number) {
        this.setState((preState, props) => ({ pageSize, pageNum }), () => this.handleSearch())
    }
    handleShowSizeChange(current: number, pageSize: number) {
        this.setState({ pageSize: pageSize, current: current })
    }
    /**
     * 操作
     * @returns 
     */
    handleCheck(bool: boolean, data: any) {
        this.setState({
            isCheck: true
        })
    }
    onCancel() {
        this.setState({ isCheck: false })
    }
    onSure() {
        this.onCancel()
        this.handleSearch()
    }
    render() {
        const { dataSource, columns, pageSize, pageNum, total, snapshot, isCheck } = this.state as any
        return (
            <Layout>
                <Content>
                    <SearchForm changeSearchForm={this.changeSearchForm.bind(this)} {...this.props}></SearchForm>
                    <Table
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
                            onChange: this.handleOnChange.bind(this)
                        }}
                    />
                    {isCheck && <RCDialog isVisible={isCheck} onCancel={() => this.onCancel()} onSure={() => this.onSure()} ></RCDialog>}
                </Content>
            </Layout>
        )
    }
}

export default Home
