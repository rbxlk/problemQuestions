# Given a string s consists of some words separated by spaces, 
# return the length of the last word in the string. If the last word does not exist, return 0.

# A word is a maximal substring consisting of non-space characters only.

# Example 1:

# Input: s = "Hello World"
# Output: 5

# Example 2:

# Input: s = " "
# Output: 0

def lengthOfLastWord(s)
    lastWordLength = 0
    if s.length == 0 
        return lastWordLength
    end

    s.chars.reverse_each { |x| 
        if x != ' '
            lastWordLength += 1
        elsif lastWordLength != 0
            return lastWordLength
        end
    }
    lastWordLength
end

# Focus on iterating through the problem. Could use split method but felt it was defeating the purpose of the problem.