function pLimit(count) {
    let index = 0;
    const res: Function[] = [];
    return function(fn: Function) {
        res.push(() => {
            fn().then((val) => {
                index--;
                const cur = res.shift();
                cur?.();
            })
        });
        if(index < count) {
            index++;
            const cur = res.shift();
            cur?.();
        }
    }
}