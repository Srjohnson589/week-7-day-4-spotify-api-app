# ------------Description---------
# In this little assignment you are given a string of space separated numbers,
# and have to return the highest and lowest number.
# All numbers are valid , no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space,
# and highest number is first.
# ----------Examples----------
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"

# takes a string of numbers
# returns string of highest lowest

# get numbers into a list so I can compare them - maybe split by " "

def high_and_low(str):
    lst = str.split(' ')
    new_str = max(lst) + ' ' + min(lst)
    return new_str

print(high_and_low("1 2 3 4 5"))
print(high_and_low("1 2 -3 4 5"))
print( high_and_low("1 9 3 4 -5"))
print(high_and_low('4'))