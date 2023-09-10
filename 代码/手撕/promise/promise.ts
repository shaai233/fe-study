/*
 * @Author: dujiang dujiang@kuaishou.com
 * @Date: 2023-09-09 19:55:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-09-10 12:02:02
 * @FilePath: \fe-study\代码\手撕\promise\promise.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MyPromise {
    value: any;
    reason: any;
    successCallback: Function;
    errorCallback: Function;
    status: 'PENDING' | 'RESOLVED' | 'REJECTED';
    constructor(call) {
        this.status = 'PENDING'
        try {
            call(this.resolve, this.reject);
        } catch(err) {
            this.reject(err)
        }
    }

    private resolve(val) {
        if(this.status !== 'PENDING') {
            return;
        }
        this.status = 'RESOLVED';
        this.value = val;
        this.successCallback.call(this, this.value)
    }

    private reject(val) {
        if(this.status !== 'PENDING') {
            return;
        }
        this.status = 'REJECTED'
        this.reason = val;
        this.errorCallback.call(this, this.reason);
        // this.errorCallback.forEach(item => item.call(this, this.reason))
    }

    then(successCallback, errorCallback) {
        successCallback = successCallback ?? ((val) => val);
        errorCallback = errorCallback ?? ((val) => val);
        return new Promise((res, rej) => {
            if(this.status === 'RESOLVED') {
                try {
                    const result = successCallback(this.value);
                    res(result);
                }catch(err) {
                    rej(err)
                }
            } else if(this.status === 'REJECTED') {
                try {
                    const result = errorCallback(this.reason);
                    res(result);
                }catch(err) {
                    rej(err)
                }
            } else {
                this.successCallback = () => {
                    try {
                        const result = successCallback(this.value);
                        res(result)
                    } catch(err) {
                        rej(err)
                    }
                }
                this.errorCallback = () => {
                    try {
                        const result = errorCallback(this.reason);
                        res(result)
                    } catch(err) {
                        rej(err)
                    } 
                }
            }
        })
    }

    static all(arr: InstanceType<typeof MyPromise>[]) {
        return new MyPromise((resolve, reject) => {
            const res: any[] = [];
            let count = 0;
            arr.forEach((item, index) => {
                item.then((val) => {
                    res[index] = val
                    count++
                    if(count >= arr.length) {
                        resolve(res)
                    }
                }, (reason) => {
                    reject(reason)
                })
            })
        })
    }
}