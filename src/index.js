// You should implement your task here.

module.exports =
    function towelSort(matrix) {
        let res = [];
        if (!matrix) {
            res = [];
        } else {
            for (let i = 1; i < matrix.length; i += 2) {
                matrix[i].reverse()
            }
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {

                    res.push(matrix[i][j])
                }
            }
        }

        return res;
    }
    // console.log(towelSort([]))