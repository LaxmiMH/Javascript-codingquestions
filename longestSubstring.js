var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxCount = 0;
  let set = new Set();

  for (let right = 0; right < s.length; right++) {
    if (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);

    maxCount = Math.max(maxCount, set.size);
  }
  return maxCount;
};
console.log(lengthOfLongestSubstring("pwwkew"));
