// 根据路由名称获取可访问的路由表
export const deepFilterMap = (routeNames: string[], routeMap: any) => {
    const acceptRouteMap: any = []
    function filterRouteMap(routeNames: string[], routeMap: any) {
        routeMap.forEach((route: any) => {
            // 如果一级路由的名称存在路由权限表中，则它之下的所有子路由都可访问
            if (routeNames.includes(route.key)) {
                acceptRouteMap.push(route)
            }
            // 如果一级路由的名称不在路由权限表中，再看它的哪些子路由名称在路由权限表中
            if (route.children) {
                filterRouteMap(routeNames, route.children)
            }
        })
        return acceptRouteMap
    }

    return filterRouteMap(routeNames, routeMap)
}
