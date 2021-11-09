/**********
** 242. Valid Anagram (easy)
****************************************/


// hash table
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const counts = {};
    
    for (let i = 0; i < s.length; ++i) {
        s[i] in counts ? counts[s[i]]++ : counts[s[i]] = 1;
        t[i] in counts ? counts[t[i]]-- : counts[t[i]] = -1;
    }
    
    for (const count of Object.values(counts)) {
        if (count !== 0) return false;
    }
    
    return true;
};


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const counts = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; ++i) {
        counts[s.charCodeAt(i) - 97]++;
        counts[t.charCodeAt(i) - 97]--;
    }
    
    for (const count of counts) {
        if (count !== 0) return false;
    }
    
    return true;
};


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const countS = {};
    const countT = {};
    
    for (let i = 0; i < s.length; ++i) {
        if (s[i] in countS) countS[s[i]]++;
        else countS[s[i]] = 1;
        
        if (t[i] in countT) countT[t[i]]++;
        else countT[t[i]] = 1;
    }
    
    for (const char in countS) {
        if (countS[char] !== countT[char]) return false;
    }
    
    return true;
};


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const counter = (counts, char) => {
        if (char in counts) counts[char]++;
        else counts[char] = 1;
        
        return counts;
    }

    const countS = Array.from(s).reduce(counter, {});
    const countT = Array.from(t).reduce(counter, {});
    
    for (const char in countS) {
        if (countS[char] !== countT[char]) return false;
    }
    
    return true;
};


// sorting
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const sArr = [...s].sort();
    const tArr = [...t].sort();
    
    for (let i = 0; i < sArr.length; ++i) {
        if (sArr[i] !== tArr[i]) return false;
    }
    
    return true;
};


