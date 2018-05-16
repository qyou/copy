/**
 * A simple copy and deepcopy module just like Python copy module
 * Author: qyou.casia@gmail.com
 *
 * License: MIT License
 * copyright 2018 qyou.casia@gmail.com
*/

!function () {
    function isPrimitive(value) {
        return (typeof value === 'string' || typeof value === 'number' || typeof value === 'symbol' || typeof value === 'boolean')
    }

    function isObject(value) {
        return (value != null && typeof value === 'object')
    }

    function copy(o) {
        let ret = undefined

        if (o == null || isPrimitive(o)) {
            return o
        }

        if (isObject(o)) {
            if (Array.isArray(o)) {
                ret = []
            } else {
                ret = Object.create(null)
            }
            for (let index in o) {
                ret[index] = o[index]
            }
        }

        return ret
    }
    function deepcopy(o) {
        let ret = undefined

        if (o == null || isPrimitive(o)) {
            return o
        }

        if (isObject(o)) {
            if (Array.isArray(o)) {
                ret = []
            } else {
                ret = Object.create(null)
            }
            for (let index in o) {
                ret[index] = deepcopy(o[index])
            }
        }
        return ret
    }

    module.exports = {
        copy: copy,
        deepcopy: deepcopy
    }
}()