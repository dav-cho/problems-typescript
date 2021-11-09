/**********
** 278. First Bad Version (easy)
****************************************/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */


/**
* binary search / divide and conquer
**/
var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1, right = n;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        
        return left;
    };
};


var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let left = 1, right = n;
        
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            
            if (isBadVersion(mid)) right = mid;
            else left = mid + 1;
        }
        
        return left;
    };
};


