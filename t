[1mdiff --git a/src/pages/BasicDetails/UserDescri.tsx b/src/pages/BasicDetails/UserDescri.tsx[m
[1mindex 55a74ba..d651b92 100644[m
[1m--- a/src/pages/BasicDetails/UserDescri.tsx[m
[1m+++ b/src/pages/BasicDetails/UserDescri.tsx[m
[36m@@ -1,13 +1,35 @@[m
 import React from 'react'[m
 import { Card, Descriptions } from 'antd'[m
[32m+[m[32mimport type { DescriptionsProps } from 'antd'[m
 [m
[31m-const items = [[m
[32m+[m[32mconst items: DescriptionsProps['items'] = [[m
     {[m
         key: '1',[m
[31m-        lable: '名字',[m
[31m-        children: 'koringz'[m
[32m+[m[32m        label: '用户姓名',[m
[32m+[m[32m        children: '小小'[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m        key: '2',[m
[32m+[m[32m        label: '联系电话',[m
[32m+[m[32m        children: '18100000000'[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m        key: '3',[m
[32m+[m[32m        label: '常用快递',[m
[32m+[m[32m        children: '菜鸟仓储'[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m        key: '4',[m
[32m+[m[32m        label: '取货地址',[m
[32m+[m[32m        children: '浙江省杭州市西湖区万塘路18号'[m
[32m+[m[32m    },[m
[32m+[m[32m    {[m
[32m+[m[32m        key: '5',[m
[32m+[m[32m        label: '备注',[m
[32m+[m[32m        children: '无'[m
     }[m
 ][m
[32m+[m
 const UserDescri: React.FC = () => {[m
     return <Descriptions title="用户信息" size={'small'} items={items} />[m
 }[m
[1mdiff --git a/src/pages/BasicDetails/index.tsx b/src/pages/BasicDetails/index.tsx[m
[1mindex cb9468b..58a50a4 100644[m
[1m--- a/src/pages/BasicDetails/index.tsx[m
[1m+++ b/src/pages/BasicDetails/index.tsx[m
[36m@@ -4,17 +4,20 @@[m
  */[m
 import React, { PureComponent } from 'react'[m
 [m
[31m-import { Layout } from 'antd'[m
[32m+[m[32mimport { Layout, Divider } from 'antd'[m
 [m
 const { Content } = Layout[m
 [m
 import UserDescri from './UserDescri'[m
[32m+[m[32mimport StoreDescri from './StoreDescri'[m
 [m
 class BasicDetails extends PureComponent {[m
     render() {[m
         return ([m
             <>[m
                 <Content>[m
[32m+[m[32m                    <StoreDescri />[m
[32m+[m[32m                    <Divider />[m
                     <UserDescri />[m
                 </Content>[m
             </>[m
