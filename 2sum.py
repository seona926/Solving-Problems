class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_table = {n: i for i, n in enumerate(nums)}
        for index, num in enumerate(nums):
            expected = target - num
            if expected in hash_table:
                if index == hash_table[expected]:
                    continue
                return index, hash_table[expected]