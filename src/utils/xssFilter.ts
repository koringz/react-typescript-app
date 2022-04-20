import xss from 'xss'

export const xssFilter = (val: any) => {
    if(typeof val === 'object') {
        for(const keys in val) {
            if(typeof val[keys] === 'string') {
                val[keys] = xss(val[keys],{})
            }
        }
    }
}