


def is_gcd(a: int, b: int) -> int:
    big = max(a, b)
    small = min(a, b)

    while small != 0:
        big, small = small, big % small

    print(big)
    return big

is_gcd(48, 18)  