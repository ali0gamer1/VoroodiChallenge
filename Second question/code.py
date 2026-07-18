#Question 2.
#Anagram hash using prime numbers.
#Prime * Prime = Product of primes.
#hash = sum of products
#dictionary for group placement
#if the sum became TOOOOO big, we can hash the hash using a different algorithm :)

#the first 26 prime numbers
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]

def hashString(arg:str)->int:
    total = 1
    
    for char in arg:
        index = ord(char) - ord("a")
        
        total = total * primes[index]
        
    return total


def groupByHash(arg:list[str]):
    
    group:dict[int,list[str]] = {}
    
    for word in arg:
        _hash = hashString(word)
        
        if not group.get(_hash):
            group[_hash] = [word]
        else:
            group[_hash].append(word)

    return list(group.values())


if __name__ == "__main__":
    l = ["eat", "tea", "tan", "ate", "nat", "bat"]
    print(groupByHash(l))