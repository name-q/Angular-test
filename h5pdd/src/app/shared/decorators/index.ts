/*装饰器*/

// 将传入的字符加上胜利的emoji输出
export const EmojiSuccess = () => {
    return function (target: Object, propertyKey: string) {
        let val = target[propertyKey];
        const getter = () => val
        const setter = (newVal: string) => {
            val = `🎉${newVal}`
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        })
    }
}

// 执行函数前弹出确认对话框 对话框内容外部传入
export const Confirmable = (message: string) => {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('Confirmable descriptor', descriptor, 'target', target, 'propertyKey', propertyKey)
        const fn = descriptor.value
        descriptor.value = function (...args: any[]) {
            if (window.confirm(message)) {
                fn.apply(this, args)
            }
        }
    }
}
