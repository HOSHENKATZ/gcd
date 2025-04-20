


def is_gcd_py(a: int, b: int) -> int:
    big = max(a, b)
    small = min(a, b)

    while small != 0:
        big, small = small, big % small

    print(big)
    return big

is_gcd_py(48, 18)  