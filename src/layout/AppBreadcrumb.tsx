/*  描述: 面包屑
 *  作者: koringz
 *  日期: 2021-11-04
 */

import React, { FC, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { Breadcrumb, Menu } from 'antd'
import { breadcrumbFilterMap } from '@/utils/deepFilter'

import './AppBreadcrumb.scss'

interface Props {
    menus: Menu[];
}

// 通用面包屑
export default function AppBreadcrumb(props: Props): JSX.Element {
    const history = useHistory()
    const Combreads = useMemo(() => {
        const paths: string = history.location.pathname;
        const arrBreads: JSX.Element[] = [];

        /**
         * @param pathname 初始 路径名
         * @param parentId 第二次开始 查找父节点 parentId 和 menuid 对比
         */
        const excuteBreadcrumb = (pathnameArr: any, parentId: number | null) => {
            let pathObj = breadcrumbFilterMap(pathnameArr, props.menus, parentId) as any
            if (pathObj instanceof Array) pathObj = pathObj[0]
            else pathObj = []

            if (pathObj) {
                arrBreads.push(<Breadcrumb.Item key={pathObj.name}>{pathObj.title}</Breadcrumb.Item>)
                parentId = pathObj.parentid
            }
            if (parentId) {
                excuteBreadcrumb(['null'], parentId)
            }
        }

        excuteBreadcrumb([paths], null)
        return arrBreads.reverse() && arrBreads
    }, [history.location.pathname, props.menus]);

    return (
        <div className="rc-breadcrumb">
            <Breadcrumb>
                {Combreads}
            </Breadcrumb>
        </div>
    )
}
