/**
 * 以递归的方式展平react router数组
 * @param {object[]} arr 路由数组
 * @param {string} child 需要递归的字段名
 */
const flattenRoutes = (arr: any) => {
    return arr.reduce((prev: any, item: any) => {
        if (Array.isArray(item.children)) {
            prev.push(item)
        }
        return prev.concat(Array.isArray(item.children) ? flattenRoutes(item.children) : item)
    }, [])
}
