// 스킬트리
/*

*/

'use strict'

function solution(skill, skill_trees) {
    var impossible = 0;
    foreachskilltree:
    for (var k = 0; k<skill_trees.length; k++) {
        var skillTree = skill_trees[k]; // "BACDE", "CBADF", "AECB", "BDA"
        for (var i = skill.length-1; i > 0; i--) { // 2, 1 -> D, B
            for (var j = skillTree.length - 1; j >= 0; j--) { // 4, 3, 2, 1, 0 -> E, D, C, A, E
                if (skillTree[j] == skill[i]) { // B -> i=1, j=0
                    if (skillTree.indexOf(skill[i - 1]) > j || skillTree.indexOf(skill[i - 1]) == -1) {
                        impossible += 1; // skill[0] = C -> j=2
                        continue foreachskilltree;
                    }
                }
            }
        }
    }
    return skill_trees.length - impossible;
}




console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));

