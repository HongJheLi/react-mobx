import { observable, action } from 'mobx'

const TestStore = observable({
    count: 1,

    addCount: action(function () {
        // console.log('before count', this.count)
        this.count++
        // console.log('after count', this.count)
    })
})

export default TestStore