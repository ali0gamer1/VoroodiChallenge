"""
test written by ai
"""



from hey import groupByHash
from random import Random


def generate_random_anagrams(word: str, count: int, seed: int = 12345) -> list[str]:
    rnd = Random(seed)
    letters = list(word)
    seen = {word}
    while len(seen) < count:
        rnd.shuffle(letters)
        seen.add("".join(letters))
    return sorted(seen)


def test_groupByHash_large():
    base_groups = {
        "triangle": 100,
        "danger": 100,
        "readily": 100,
        "listen": 100,
        "master": 100,
        "anagram": 100,
        "starting": 100,
        "python": 100,
        "folder": 100,
        "binary": 100,
    }

    words = []
    expected = []
    seed = 200
    for word, count in base_groups.items():
        group = generate_random_anagrams(word, count, seed)
        words.extend(group)
        expected.append(group)
        seed += 1

    assert len(words) == 1000

    groups = groupByHash(words)
    normalized = [sorted(g) for g in groups]
    normalized_sorted = sorted(normalized, key=lambda x: x[0])
    expected_sorted = sorted([sorted(g) for g in expected], key=lambda x: x[0])

    assert normalized_sorted == expected_sorted
    assert sum(len(g) for g in normalized_sorted) == len(words)
    assert len(normalized_sorted) == len(expected_sorted)


if __name__ == "__main__":
    test_groupByHash_large()
    print("test_groupByHash_large passed")
